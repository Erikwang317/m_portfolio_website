import React, { useState, useRef, Suspense, useEffect, memo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { Points, PointMaterial, Preload, useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import { moon, normal, mars, meteor, galaxy_texture } from "../../assets"; 

const Moon = () => {
  const moonTexture = new THREE.TextureLoader().load(
    moon,
    () => {
      console.log("Moon Texture Loaded Successfully");
    },
    undefined,
    (err) => {
      console.error("Error loading moon texture:", err);
    }
  );
  const normalTexture = new THREE.TextureLoader().load(
    normal,
    () => {
      console.log("Moon normal Loaded Successfully");
    },
    undefined,
    (err) => {
      console.error("Error loading moon normal:", err);
    }
  );

  const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
  const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  });

  const moonRef = useRef();

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.x += 0.002; // Adjust rotation speed as needed
      moonRef.current.rotation.y += 0.002;
    }
  });


  return (
    <mesh ref={moonRef}>
      <primitive
        object={new THREE.Mesh(moonGeometry, moonMaterial)} 
        // scale={isMobile ? 0.7 : 0.75}
        scale={0.75}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        position={[0, -3.25, -1.5]}
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
  const marsTexture = new THREE.TextureLoader().load(mars);
  const normalTexture = new THREE.TextureLoader().load(normal);

  const marsGeometry = new THREE.SphereGeometry(3, 32, 32);
  const marsMaterial = new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalTexture
  });

  const marsRef = useRef();

  useFrame(() => {
    if (marsRef.current) {
      marsRef.current.rotation.x += 0.005; // Adjust rotation speed as needed
      marsRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={marsRef}>
      <primitive
        object={new THREE.Mesh(marsGeometry, marsMaterial)} 
        scale={isMobile ? 1.3 : 1.35}
        position={isMobile ? [-10, -3, -2.2] : [0, -3.25, -1.5]}
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
  const meteor_obj = useGLTF("./meteor/scene.gltf");
  const texture = useTexture(meteor);

  const meteorRef = useRef();

  useFrame(() => {
    if (meteorRef.current) {
      // meteorRef.current.rotation.x += Math.random()/100; // Adjust rotation speed as needed
      meteorRef.current.position.x += 0.1;
      meteorRef.current.rotation.z += 0.03;
      // meteorRef.current.rotation.z += 0.05;

      const leftBound = -15//-window.innerWidth / 2; // when it goes beyond left screen
      const rightBound = 15//window.innerWidth / 2; // when it goes beyond right screen
      // meteorRef.current.rotation.y += Math.random()/100;
      if (meteorRef.current.position.x > rightBound) {
        meteorRef.current.position.x = leftBound; // Adjust based on your scene's size
      }
    }
  });

  return (
    <mesh ref = {meteorRef}>
      <primitive
        object={meteor_obj.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [3, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Galaxy = (isMobile) => {
  const galaxy = useGLTF("./galaxy/scene.gltf");
  const texture = useTexture(
    galaxy_texture,
    () => {
      console.log("Galaxy normal Loaded Successfully");
    },
    undefined,
    (err) => {
      console.error("Error loading galaxy normal:", err);
  });

  const galaxyRef = useRef();

  useFrame(() => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.x += Math.random()/100; // Adjust rotation speed as needed
      galaxyRef.current.rotation.y += Math.random()/100;
      galaxyRef.current.rotation.y += Math.random()/100;
    }
  });

  return (
    <mesh ref = {galaxyRef}>
      <primitive
        object={galaxy.scene}
        scale={isMobile ? 4 : 5}
        position={[0, 0, 0]}
      />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};


const UniverseCanvas = memo(() => {
  const cameraRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position
      // Update camera or object position based on scroll
      if (cameraRef.current) {
        cameraRef.current.position.z = 60 - scrollY / 10; // Example effect
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        ref={cameraRef}
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 30], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        
        {/* <Suspense fallback={<CanvasLoader />}> */}
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            maxDistance={150} 
            minDistance={10}

        />
          <Moon isMobile={isMobile} />
          <Mars isMobile={isMobile} />
          <Torus />
          <Galaxy isMobile={isMobile}/>
          <Meteor isMobile={isMobile}/>
        </Suspense>
        
        <Preload all />
      </Canvas>
    </div>
  );
});

export default UniverseCanvas;
