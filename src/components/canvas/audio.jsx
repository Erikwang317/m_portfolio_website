import React, {useState, useRef, useEffect } from 'react';

const AudioVisualizer = ({ audioRef }) => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const analyzerRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false);
  const animationFrameId = useRef();

  const toggleMusic = () => {
    // Resume the audio context if it's in a suspended state due to browser policy.
    if (audioContextRef.current && audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
    }

    // Play or pause the audio as per the current state.
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying); // Toggle the isPlaying state.
    }
  };

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    analyzerRef.current = audioContextRef.current.createAnalyser();

    if (audioRef.current && !sourceNodeRef.current) {
      sourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
      sourceNodeRef.current.connect(analyzerRef.current);
      analyzerRef.current.connect(audioContextRef.current.destination);
    }

    // Cleanup function
    return () => {
        if (sourceNodeRef.current) {
            sourceNodeRef.current.disconnect();
        }
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close();
        }
    };
  }, []); // Empty array ensures this runs only once

  useEffect(() => {
    // Canvas setup: Get the context, define dimensions, etc.
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
  
    // Define the drawing function
    const draw = () => {
        // console.log("isPlaying:" + isPlaying)
        // console.log("audioContextRef:" + audioContextRef.current)
        // console.log("analyzerRef:" + analyzerRef.current)
        // Ensure the audio context and other variables are ready
        if (!isPlaying || !audioContextRef.current || !analyzerRef.current) {
            canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
            return;
        }

        // Get an analyzer from the audio context if it exists
        const analyzer = analyzerRef.current;
        analyzer.fftSize = 32;
        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // Continue the drawing loop
        //console.log(isPlaying);
        if (isPlaying) {
            animationFrameId.current = requestAnimationFrame(draw);
        }
        //console.log(audioContextRef.current.state); 
        console.log(`Audio Paused: ${audioRef.current.paused}`);
        console.log(`Audio Current Time: ${audioRef.current.currentTime}`);
        analyzer.getByteFrequencyData(dataArray);
        //console.log(dataArray)
        const barWidth = (WIDTH / bufferLength) * 2.5;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i];
            canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
            canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
            x += barWidth + 1;
        }
    };
  
    // Start the drawing loop
    if (isPlaying) {
        draw();
    }
  
    // Cleanup function
    return () => {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
    };
}, [isPlaying]); 
  return (
    <div className="relative flex" onClick={toggleMusic}>
        <canvas 
            ref={ canvasRef } 
            width={70} 
            height={40} 
            style={{border: "1px solid black"}}
        />
        {/* <button onClick={() => {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = 'rgb(255, 0, 0)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }}>Test Draw</button>   */}
        {/* <p>Canvas</p> */}
    </div>
  )
};

export default AudioVisualizer;