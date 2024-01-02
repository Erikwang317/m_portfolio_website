import React, {useState, useRef, useEffect } from 'react';

const AudioVisualizer = ({ audioRef }) => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (!audioRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    let analyzer;
    let dataArray;

    // Only create the audio context and source node if they don't already exist
    if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        sourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
        
        const audioContext = audioContextRef.current;
        analyzer = audioContext.createAnalyser();

        sourceNodeRef.current.connect(analyzer);
        analyzer.connect(audioContext.destination);

        analyzer.fftSize = 32;
        const bufferLength = analyzer.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
    }

    if (audioContextRef.current && audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume(); // Resume the audio context
    }
    

    const draw = () => {
      if (!isPlaying) {
        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
        return;
      }

      requestAnimationFrame(draw);
      analyzer.getByteFrequencyData(dataArray);

      const barWidth = (WIDTH / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
      }
    };

    draw();

    return () => {
        if (sourceNodeRef.current && audioContextRef.current) {
            sourceNodeRef.current.disconnect();
            audioContextRef.current.close(); // Close the audio context
        }
    };
  }, [isPlaying, audioRef]);
  return (
    <div className="relative flex" onClick={toggleMusic}>
        <canvas ref={canvasRef} width={70} height={40} />
    </div>
  )
};

export default AudioVisualizer;