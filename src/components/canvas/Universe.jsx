import React, { useState, useRef, Suspense, useEffect, memo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { Points, PointMaterial, Preload, useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import { moon, normal, mars, meteor, galaxy_texture } from "../../assets"; 

const Moon = memo(({textures}) => {
  const moonRef = useRef();
  const [moonMesh, setMoonMesh] = useState();

  useEffect(() => {
    if (textures.moon && textures.normal) {
      const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
      const moonMaterial = new THREE.MeshStandardMaterial({
        map: textures.moon,
        normalMap: textures.normal
      });

      setMoonMesh(new THREE.Mesh(moonGeometry, moonMaterial)); // Initialize mesh

      return () => {
        moonGeometry.dispose();
        moonMaterial.dispose();
      };
    }
  }, []);

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.x += 0.002; // Adjust rotation speed as needed
      moonRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={moonRef}>
      {moonMesh && (
        <primitive
          object={moonMesh}
          scale={0.75}
          position={[0, -3.25, -1.5]}
          rotation-x={0.02}
        />
      )}
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
});

const Mars =  memo(({isMobile, textures}) => {
  const marsRef = useRef();
  const [marsMesh, setMarsMesh] = useState();

  useEffect(() => {
    if (textures.mars && textures.normal) {
      const marsGeometry = new THREE.SphereGeometry(3, 32, 32);
      const marsMaterial = new THREE.MeshStandardMaterial({
        map: textures.mars,
        normalMap: textures.normal
      });
      setMarsMesh(new THREE.Mesh(marsGeometry, marsMaterial));

      return () => {
        marsGeometry.dispose();
        marsMaterial.dispose();
      };
    }
  }, []);

  useFrame(() => {
    if (marsRef.current) {
      marsRef.current.rotation.x += 0.005; // Adjust rotation speed as needed
      marsRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={marsRef}>
      {marsMesh && (
        <primitive
          object={marsMesh} 
          scale={isMobile ? 0.8 : 0.85}
          position={isMobile ? [-10, -3, -2.2] : [0, -3.25, -1.5]}
        />
      )}
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
});

const Torus = () => {
  return (
    <mesh>

    </mesh>
  );
};

const Meteor =  memo(({isMobile, textures}) => {
  const meteor_obj = useGLTF("./meteor/scene.gltf");
  const texture = useTexture(textures.meteor);

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
});

const Galaxy =  memo(({isMobile}) => {
  const galaxy = useGLTF("./galaxy/scene.gltf");
  // const texture = useTexture(textures.galaxy);

  const galaxyRef = useRef();

  // useFrame(() => {
  //   if (galaxyRef.current) {
  //     galaxyRef.current.rotation.x += Math.random()/100; // Adjust rotation speed as needed
  //     galaxyRef.current.rotation.y += Math.random()/100;
  //     galaxyRef.current.rotation.y += Math.random()/100;
  //   }
  // });

  return (
    <mesh ref = {galaxyRef}>
      <primitive
        object={galaxy.scene}
        scale={isMobile ? 4 : 5}
        position={[0, 0, 0]}
      />
      <meshStandardMaterial/>
    </mesh>
  );
});


const UniverseCanvas = memo(() => {
  // const cameraRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [textures, setTextures] = useState({});

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

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // useEffect(() => {
  //   // const manager = new THREE.LoadingManager();
  //   // let loadedTextures = {};

  //   // Set up a loading manager to handle all textures
  //   // manager.onStart = () => {
  //   //   console.log('Started loading textures');
  //   // };
  //   // manager.onLoad = () => {
  //   //   console.log('All textures loaded');
  //   //   setTextures(loadedTextures);
  //   // };
  //   // manager.onProgress = function ( url ) {
  //   //   console.log( 'Loading file: ' + url + '.\nLoaded ' );
  //   // };
  //   // manager.onError = (url) => {
  //   //   console.log('There was an error loading ' + url);
  //   // };

  //   const loader = new THREE.TextureLoader();

  //   setTextures({ 
  //     moon: loader.load(moon, (err) => {
  //       console.log("Error")
  //     }), 
  //     mars: loader.load(mars), 
  //     galaxy: loader.load(galaxy_texture), 
  //     meteor: loader.load(meteor),
  //     normal: loader.load(normal)
  //   });
  //   // console.log(moon)

  //   // return () => {
  //   //   loadedTextures.dispose();
  //   // };
  // }, []);

  useEffect(() => {
    const loadTextures = async () => {
      try {
        const loader = new THREE.TextureLoader();
        
        const moonTex = await loader.load(moon);
        const marsTex = await loader.load(mars);
        const meteorTex = await loader.load(moon);
        const normalTex = await loader.load(moon);
    
        setTextures({
          moon: moonTex,
          mars: marsTex,
          // galaxy: galaxyTex,
          meteor: meteorTex,
          normal: normalTex
        });
      } catch (error) {
        console.error('An error happened while loading textures', error);
      }
    };
    loadTextures();

    // const loadTexture = (path) => {
    //   return new Promise((resolve, reject) => {
    //     loader.load(path, resolve, undefined, reject);
    //   });
    // };
  
    // Promise.all([
    //   loadTexture(moon),
    //   loadTexture(mars),
    //   // loadTexture(galaxy_texture),
    //   loadTexture(meteor),
    //   loadTexture(normal)
    // ]).then(([moonTex, marsTex, meteorTex, normalTex]) => {
    //   setTextures({
    //     moon: moonTex,
    //     mars: marsTex,
    //     // galaxy: galaxyTex,
    //     meteor: meteorTex,
    //     normal: normalTex
    //   });
    // }).catch(error => {
    //   console.error('An error happened while loading textures', error);
    // });
    
  }, []); 
  return Object.keys(textures).length === 0? (
    <div className='text-center z-[-1]'>Loading...</div>
  ) : (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        // ref={cameraRef}
        // shadow
        dpr={[1, 2]}
        camera={{ position: [0, 0, 30], fov: 30 }}
        gl={{ preserveDrawingBuffer: false }}
      >
        
        <Suspense fallback={CanvasLoader}>
          <OrbitControls
            enableZoom={false}
        />
          <Moon isMobile={isMobile} textures={textures}/>
          <Mars isMobile={isMobile} textures={textures}/>
          {/* <Torus /> */}
          {/* <Galaxy isMobile={isMobile}/> */}
          {/* <Meteor isMobile={isMobile} textures={textures}/> */}
        </Suspense>
        
        <Preload all />
      </Canvas>

    </div>
  );
});

export default UniverseCanvas;
