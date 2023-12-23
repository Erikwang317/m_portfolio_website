import React, { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { Points, PointMaterial, Preload, useGLTF, useTexture } from "@react-three/drei";

const Moon = (isMobile) => {
  const moonTexture = new THREE.TextureLoader().load('../assets/resources/moon.jpg');
  const normalTexture = new THREE.TextureLoader().load('./assets/resources/normal.jpg');

  const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
  const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  });

  return (
    <mesh>
      <primitive
        object={new THREE.Mesh(moonGeometry, moonMaterial)} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation-x={0.02}
      />
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
    </mesh>
  );
};

const Mars = (isMobile) => {
  const marsTexture = new THREE.TextureLoader().load('./assets/resources/marsTexture.png');
  const normalTexture = new THREE.TextureLoader().load('./assets/resources/normal.jpg');

  const marsGeometry = new THREE.SphereGeometry(3, 32, 32);
  const marsMaterial = new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalTexture
  });

  return (
    <mesh>
      <primitive
        object={new THREE.Mesh(marsGeometry, marsMaterial)} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0.005, 0, 0]}
      />
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-10, 10, 30]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} /> 
    </mesh>
  );
};

const Torus = () => {
  return (
    <mesh>

    </mesh>
  );
};

const Meteor = (isMobile) => {
  const meteor = useGLTF("./meteor/scene.gltf");
  const texture = useTexture("./meteor/textures/lambert3_baseColor.png");
  return (
    <mesh>
      <primitive
        object={meteor.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Galaxy = (isMobile) => {
  const galaxy = useGLTF("./galaxy/scene.gltf");
  return (
    <mesh>
      <primitive
        object={galaxy.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Universe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    var view = 75;
    var m_aspect = window.innerWidth / window.innerHeight;
    var nearPlane = 0.1; 
    var farPlane = 1000; 
    const m_scene = new THREE.Scene();
    const m_camera = new THREE.PerspectiveCamera(view, m_aspect, nearPlane, farPlane);
    const m_renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(m_renderer.domElement);

    // Add your Three.js objects here
    // const m_renderer = new THREE.WebGLRenderer({
    // canvas: threeJsContainer.appendChild(document.createElement('canvas')),
    // });

    m_renderer.setPixelRatio(window.devicePixelRatio);
    m_renderer.setSize(window.innerWidth, window.innerHeight);

    m_camera.position.setZ(30);
    m_renderer.render(m_scene, m_camera);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({color: 0xff6347});
    const torus = new THREE.Mesh(geometry, material);
    m_scene.add(torus);


    //Lights
    const ambientLight = new THREE.AmbientLight(0xffffff);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(3, 3, 3);

    const directionaltLight = new THREE.DirectionalLight(0xff4857);
    m_scene.add(pointLight,ambientLight,directionaltLight);

    //Helpers

    const lightHelper = new THREE.PointLightHelper(pointLight)
    const gridHelper = new THREE.GridHelper(200, 50);
    m_scene.add(lightHelper, gridHelper)

    const controls = new OrbitControls(m_camera, m_renderer.domElement);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      m_scene.add(star);
      }

    Array(200).fill().forEach(addStar);

    // Background
    const spaceTexture = new THREE.TextureLoader().load('./assets/resources/space.jpg');
    m_scene.background = spaceTexture;

    // Avatar


    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      moon.rotation.x += 0.05;
      moon.rotation.y += 0.075;
      moon.rotation.z += 0.05;

      avatar.rotation.y += 0.01;
      avatar.rotation.z += 0.01;

      m_camera.position.z = t * -0.01;
      m_camera.position.x = t * -0.0002;
      m_camera.rotation.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    //moveCamera();



    // Handle resize
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} />;
};

const UniverseCanvas = () => {
  return (
    <div>
      <Canvas>
        {/* <Suspense fallback={<CanvasLoader />}> */}
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Moon />
          <Mars />
          <Torus />
          <Galaxy />
          <Meteor />
        </Suspense>
        
        <Preload all />
      </Canvas>
    </div>
  );
};

export default UniverseCanvas;
