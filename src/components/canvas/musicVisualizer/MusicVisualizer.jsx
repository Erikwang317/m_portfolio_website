import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { cornfield } from '../../../assets';
import { GUI } from 'dat.gui';
// import { Canvas } from '@react-three/fiber';
import { vertexShader, fragmentShader } from './shaders';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass';

const MusicVisualizer = () => {
    const mountRef = useRef(null);
    const canvasRef = useRef(null);
    const guiRef = useRef(null);

    useEffect (() => {
        const params = {
            red: 1.0,
            green: 1.0,
            blue: 1.0,
            threshold: 0.5,
            strength: 0.5,
            radius: 0.8
        }

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias:true,
            alpha: true
        })
        renderer.setClearColor(0x000000, 0)
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        //camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, -2, 14);
        camera.lookAt(0, 0, 0);


        //Audio
        const listener = new THREE.AudioListener();
        camera.add(listener);
        const sound = new THREE.Audio(listener);
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load(cornfield, function(buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            window.addEventListener('click', () => sound.play());
        });

        //shaders
        const shaderMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                u_time: { value: 0.0 },
                u_frequency: { value: 0.0 },
                u_red: { value: params.red },
                u_green: { value: params.green },
                u_blue: { value: params.blue }
            }
        });


        const geo = new THREE.IcosahedronGeometry(4, 30 );
        const mesh = new THREE.Mesh(geo, shaderMaterial);
        scene.add(mesh);


        const analyser = new THREE.AudioAnalyser(sound, 32);        
        const renderScene = new RenderPass(scene, camera);
        

        // Set up the UnrealBloomPass
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight));
        bloomPass.threshold = params.threshold;
        bloomPass.strength = params.strength;
        bloomPass.radius = params.radius;
        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // Set up the EffectComposer to chain the render pass and the bloom pass
        guiRef.current = new GUI();
        const bloomFolder = guiRef.current.addFolder('Bloom');
        bloomFolder.add(params, 'threshold', 0, 1).onChange(value => bloomPass.threshold = value);
        bloomFolder.add(params, 'strength', 0, 3).onChange(value => bloomPass.strength = value);
        bloomFolder.add(params, 'radius', 0, 1).onChange(value => bloomPass.radius = value);

        const colorsFolder = guiRef.current.addFolder('Colors');
        colorsFolder.add(params, 'red', 0, 1).onChange(value => shaderMaterial.uniforms.u_red.value = value);
        colorsFolder.add(params, 'green', 0, 1).onChange(value => shaderMaterial.uniforms.u_green.value = value);
        colorsFolder.add(params, 'blue', 0, 1).onChange(value => shaderMaterial.uniforms.u_blue.value = value);

        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();
            shaderMaterial.uniforms.u_time.value = analyser.getAverageFrequency(); // Update time uniform for shaders
            shaderMaterial.uniforms.u_frequency.value = analyser.getAverageFrequency();
            camera.lookAt(scene.position);
            composer.render(); 
        };
    
        animate();

        return () => {
            guiRef.current.destroy();
            renderer.dispose();
            //scene.dispose();
            shaderMaterial.dispose();
            geo.dispose();
            mesh.geometry.dispose();
            mesh.material.dispose();
            //audioLoader.dispose(); 
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef}>
            <canvas 
                ref={canvasRef}
                className='z-[0]'/>
        </div>
    )
}

export default MusicVisualizer