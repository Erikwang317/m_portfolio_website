import React from "react";
import { BallCanvas } from "./canvas";
import { Ball } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./Loader";
import { OrbitControls, Preload } from "@react-three/drei";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };
// const TechnologyCard = ({ tech }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", tech.index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//           glare: false,
//           "max-glare": 0,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className="technology-card" style={{
//           background: "#1d1836",
//           color: "#fff",
//           borderRadius: "15px",
//           boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
//           textAlign: "center",
//           overflow: 'hidden'
//         }}>
//           <img
//             src={tech.icon}
//             alt={tech.name}
//             className='w-[20%] h-[30%] object-contain'
//             style={{ margin: "0 auto" }}
//           />
//           <h3 className='text-[20px] font-bold'>{tech.name}</h3>
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

const TechnologyCard = ({ tech }) => {
  // Define motion variants for the card
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5 } }
  };

  return (
    <Tilt className="tilt" options={{ max: 25, scale: 1.05, speed: 400, glare: false }}>
      <motion.div
        className="technology-card"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        style={{
          background: "#1d1836",
          color: "#fff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          textAlign: "center",
          margin: "10px",
          width: '200px',
          // width: window.innerWidth / 7, // Set a fixed width or make it responsive
          // height: window.innerHeight / 5,
          // Ensure that the container is positioned relatively for tilt to work
          position: 'relative',
          display: 'inline-block', // This makes the tilt effect work on the size of the card
        }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className='w-[60%] h-[60%] object-contain'
          style={{ margin: "0 auto" }}
        />
        <h3 className='text-[20px] font-bold'>{tech.name}</h3>
      </motion.div>
    </Tilt>
  );
};

function generatePositions(count, rows, cols, spacing) {
  const positions = [];

  for (let i = 0; i < count; i++) {
    let row = Math.floor(i / cols);
    let col = i % cols;

    let x = col * spacing - ((cols - 1) * spacing) / 2 + Math.random() * 3;
    let y = row * spacing - ((rows - 1) * spacing) / 2 + Math.random() * 3;
    let z = Math.random() * 3;

    positions.push([x, y, z]);
  }

  return positions;
}

const count = technologies.length;
const rows = 3;
const cols = Math.ceil(count / rows); 
const spacing = 10; 
const precomputedPositions = generatePositions(count, rows, cols, spacing);

const Tech = (positions) => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have learned so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Technolgy Experience.
          </h2>
      </motion.div>
      
      <div style={{width: '100%', height: '100vh'}}>
        <Canvas 
          frameloop='demand' 
          dpr={[1, 2]} 
          camera={{ position: [0, 0, 30], fov: 70 }}
          gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<CanvasLoader />}>

            <OrbitControls 
              enableZoom={false} 
              maxAzimuthAngle={Math.PI / 6} 
              minAzimuthAngle={-Math.PI / 6} 
              maxPolarAngle={4 * Math.PI / 6}
              minPolarAngle={2 * Math.PI / 6}
              maxDistance={150} 
              minDistance={10}
            />

            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 5]} />

            {technologies.map((tech, index) => (
              <Ball key={index} icon={tech.icon} position={precomputedPositions[index]} name={tech.name} />
            ))}
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      {technologies.map((tech, index) => (
        <TechnologyCard key={index} tech={tech} />
      ))}
  </div>
  );
};


export default SectionWrapper(Tech, "");
