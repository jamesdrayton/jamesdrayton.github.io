import {useEffect, useState, useRef} from 'react';
import { PitchShifter } from 'soundtouchjs';

const TempoDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [shifter, setShifter] = useState(null);
    const [trueTempo, setTrueTempo] = useState(800);
    const [audioCtx, setAudioContext] = useState(new AudioContext());
    const audioSrc = "./Audio/1_context_75.wav?_t=" + Date.now();
    const knob = useRef();
    const changeRate = 0.2;                       // The rate at which the tempo knob changes tempo

    let tempo = 100;
    let prevX = 0;
    let prevY = 0;

    useEffect(() => {
      fetchAudioData(audioSrc);
      knob.current.scrollIntoView();
    }, []);
    
    async function fetchAudioData(url) {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      await audioCtx.decodeAudioData(arrayBuffer).then(onBuffer).catch(onDecodeBufferError);
    }
    
    function onBuffer(buffer) {
      const shifter = new PitchShifter(audioCtx, buffer, 1024);
      setShifter(shifter);
      marginChanger(10);
      shifter.tempo = tempo/100;
      shifter.pitch = 1;
      shifter.on('play', (detail) => {
          setIsPlaying(true);
      });
    }
    
    function onDecodeBufferError(e) {
      console.log('Error decoding buffer: ' + e.message);
    }

    // Helper function to randomly add or subtract a percentage from the tempo based on the margin
    function marginChanger(margin) {
      let n = Math.floor(Math.random() * 2) + 1;
      let ran = (Math.random() * margin)
      switch (n) {
          case 1:
              tempo += ran;
          case 2:
              tempo -= ran;
      }
    }

    function changeTempo(t) { 
      tempo = t;
      shifter.tempo = t/100;
      shifter.pitch = 1;     // ensures the pitch stays the same after changing tempo
    }

    function tempoKnob(e) {
    
      const knobW = knob.current.getBoundingClientRect().width;
      const knobH = knob.current.getBoundingClientRect().height;
  
      // Mouse coordinates offset by the knob size
      const currX = e.clientX - knob.current.offsetLeft;
      const currY = e.clientY - knob.current.offsetTop;
  
      const deltaX = knobW - currX;
      const deltaY = knobH - currY;
  
      // mouse coordinates in radians and degrees
      const rad = Math.atan2(deltaY, deltaX);
      var deg = rad * (180 / Math.PI);
      // console.log(deg);
  
      // Should probably make this a switch statement
      if (currY < knobH && currX > knobW) { 
          // console.log("Top Right");
          if (prevX <= currX && prevY <= currY) {
              // console.log("Increasing");
              changeTempo(tempo + changeRate);
          } else if (prevX >= currX && prevY >= currY) {
              // console.log("Decreasing");
              changeTempo(tempo - changeRate);
          }
      } else if (currY > knobH && currX > knobW) {
          // console.log("Bottom Right");
          if (prevX >= currX && prevY >= prevY) {
              // console.log("Increasing");
              changeTempo(tempo + changeRate);
          } else if (prevX <= currX && prevY <= currY) {
              // console.log("Decreasing");
              changeTempo(tempo - changeRate);
          }
      } else if (currY < knobH && currX < knobW) {
          // console.log("Top Left");
          if (prevX <= currX && prevY >= currY) {
              // console.log("Increasing");
              changeTempo(tempo + changeRate);
          } else if (prevX >= currX && prevY <= currY) {
              // console.log("Decreasing");
              changeTempo(tempo - changeRate);
          }
      } else if (currY > knobH && currX < knobW) {
          // console.log("Bottom Left");
          if (prevX >= currX && prevY >= currY) {
              // console.log("Increasing");
              changeTempo(tempo + changeRate);
          } else if (prevX <= currX && prevY <= currY) {
              // console.log("Decreasing");
              changeTempo(tempo - changeRate);
          }
      }
  
      prevX = currX;
      prevY = currY;
      if (tempo <= 0) {
          changeTempo(1);
      }
      console.log(tempo);
      return deg;
    }

    function rotate(e) {
      const result = Math.floor(tempoKnob(e) - 90);
      knob.current.style.transform = "rotate(${result}deg)";
    }

    function endRotation() {
      window.removeEventListener("mousemove", rotate);
      window.removeEventListener("touchmove", rotate);
      knob.current.style.setProperty('border', 'initial');
    }

    function startRotation() {
      if(isPlaying) {
        window.addEventListener("mousemove", rotate);
        window.addEventListener("touchmove", rotate);
        knob.current.style.setProperty('border', '3px solid #fff');
        knob.current.style.setProperty('border-radius', '200px');
        window.addEventListener("mouseup", endRotation);
        window.addEventListener("touchend", endRotation);
      }
    }

    function startTest() {
      if (isFinished) {
        // Test does not restart
      } else {
        const gainNode = audioCtx.createGain();
        if (isPlaying) {
          shifter.disconnect();
          gainNode.disconnect();
          setTrueTempo((tempo/100) * trueTempo);
          setIsPlaying(false);
          setIsFinished(true);
        } else {
          shifter.connect(gainNode); // connect it to a GainNode to control the tempo
          gainNode.connect(audioCtx.destination); // attach the GainNode to the 'destination' to begin playback
          audioCtx.resume().then(() => {
            setIsPlaying(true);
          });
        }
      }
    }    

    return ( 
        <div className="page">
            <h1 style={{color: '#73AD21'}}>Tempo Determination Experiment</h1>
            <h2>Instructions:</h2>
            <p> {!isFinished &&
              ("Click the play button to start audio playback and turn the knob to change the tempo. " +
              "The audio starts at a slightly different tempo from the original tempo of the file. " +
              "Click the play button again when you think you've reached the right tempo. The official experiment uses " +
              "many similar audio files to compare how rhythm, syncopation, and other factors impact perception of tempo.")}
            </p>
            <p>{isFinished && ("Your final tempo was " + Math.round(trueTempo) + "ms, " + Math.round((trueTempo - 800)) + "ms off")}</p>
            <div className="playButton" onClick={startTest}>
                <input type="hidden" className="playAudio"></input>
            </div>
            <div className="slider">
                <form className="knob" ref={knob} 
                      onMouseDown={isPlaying ? startRotation: undefined} 
                      onTouchStart={isPlaying ? startRotation: undefined}>
                    <input type="hidden" className="tempoKnob"></input>
                </form>
            </div>
            <script type="module" src="shifter.js"></script>
            <script type="module" src="TempoDemo.js"></script>
        </div>
     );
}
 
export default TempoDemo;