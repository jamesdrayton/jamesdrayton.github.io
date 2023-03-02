import {useEffect, useState, useRef} from 'react';
import { PitchShifter } from "soundtouchjs";

const TempoDemo = ({project}) => {
    const [audioBuffer, setAudioBuffer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    const [shifter, setShifter] = useState(null);
    const [tempo, setTempo] = useState(100);
    // TODO: Set up an alternate prepaudiopaths fn
    const [audioSrc, setAudioSrc] = useState("./Audio/1_context_75.wav?_t=" + Date.now());
    const [audioCtx, setAudioCtx] = useState(new AudioContext());
    const knob = useRef();
    const changeRate = 0.2;                       // The rate at which the tempo knob changes tempo

    let tracker;
    let trueTempo = 800;
    let prevX = 0;
    let prevY = 0;
    let deltaT = 0;
    let beat = 1;

    useEffect(() => {
      fetchAudioData(audioSrc);
    }, []);
    
    async function fetchAudioData(url) {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      await audioCtx.decodeAudioData(arrayBuffer).then(onBuffer).catch(onDecodeBufferError);
    }
    
    function onBuffer(buffer) {
      const shifter = new PitchShifter(audioCtx, buffer, 1024);
      setShifter(shifter);
      shifter.tempo = tempo/100;
      shifter.pitch = 1;
      shifter.on('play', (detail) => {
          setIsPlaying(true);
      });
    }
    
    function onDecodeBufferError(e) {
      console.log('Error decoding buffer: ' + e.message);
    }

    function changeTempo(t) { 
      setTempo(t);
      shifter.tempo = t/100;
      shifter.pitch = 1;     // ensures the pitch stays the same after changing tempo
      // Resets the beat tracker every time the tempo changes
      clearInterval(tracker);
      tracker = setInterval(beatTrack, (trueTempo - (trueTempo * deltaT/100)));
    }

    function beatTrack() {
      // console.log("Beat #: " + beat);
      beat++;
      if (shifter.percentagePlayed == 100) {
          shifter.percentagePlayed = 0;
      }
    }

    function tempoKnob(e) {
    
      const knobW = knob.current.getBoundingClientRect().x - (knob.current.getBoundingClientRect().width / 2);
      const knobH = knob.current.getBoundingClientRect().y - (knob.current.getBoundingClientRect().height / 2);
  
      // Mouse coordinates offset by the knob size
      const currX = e.clientX - knob.current.offsetLeft;
      const currY = e.clientY - knob.current.offsetTop;
  
      const deltaX = knobW - currX;
      const deltaY = knobH - currY;
      let tem = tempo;
  
      // mouse coordinates in radians and degrees
      const rad = Math.atan2(deltaY, deltaX);
      var deg = rad * (180 / Math.PI);
  
      // Should probably make this a switch statement
      if (currY < knobH && currX > knobW) { 
          // console.log("Top Right");
          if (prevX <= currX && prevY <= currY) {
              // console.log("Increasing");
              tem += changeRate;
              deltaT += changeRate;
          } else if (prevX >= currX && prevY >= currY) {
              // console.log("Decreasing");
              tem -= changeRate;
              deltaT -= changeRate;
          }
      } else if (currY > knobH && currX > knobW) {
          // console.log("Bottom Right");
          if (prevX >= currX ** prevY >= prevY) {
              // console.log("Increasing");
              tem += changeRate;
              deltaT += changeRate;
          } else if (prevX <= currX && prevY <= currY) {
              // console.log("Decreasing");
              tem -= changeRate;
              deltaT -= changeRate;
          }
      } else if (currY < knobH && currX < knobW) {
          // console.log("Top Left");
          if (prevX <= currX && prevY >= currY) {
              // console.log("Increasing");
              tem += changeRate;
              deltaT += changeRate;
          } else if (prevX >= currX && prevY <= currY) {
              // console.log("Decreasing");
              tem -= changeRate;
              deltaT -= changeRate;
          }
      } else if (currY > knobH && currX < knobW) {
          // console.log("Bottom Left");
          if (prevX >= currX && prevY >= currY) {
              // console.log("Increasing");
              tem += changeRate;
              deltaT += changeRate;
          } else if (prevX <= currX && prevY <= currY) {
              // console.log("Decreasing");
              tem -= changeRate;
              deltaT -= changeRate;
          }
      }
  
      prevX = currX;
      prevY = currY;
      if (tempo > 0) {
          changeTempo(tem);
      } else {
          tempo = 1;
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
      knob.current.style.setProperty('border', 'initial');
    }

    function startRotation() {
      if(isPlaying) {
        window.addEventListener("mousemove", rotate);
        knob.current.style.setProperty('border', '3px solid #fff');
        knob.current.style.setProperty('border-radius', '200px');
        window.addEventListener("mouseup", endRotation);
      }
    }

    function startTest() {
      const gainNode = audioCtx.createGain();
      if (isPlaying) {
        shifter.disconnect();
        gainNode.disconnect();
        setIsPlaying(false);
      } else {
        shifter.connect(gainNode); // connect it to a GainNode to control the volume
        gainNode.connect(audioCtx.destination); // attach the GainNode to the 'destination' to begin playback
        audioCtx.resume().then(() => {
          setIsPlaying(true);
        });
      }
    }    

    return ( 
        <div className="page" style={{
            display: project.display,
            opacity: project.opacity,
            }}>
            <h1>Tempo Determination Experiment</h1>
            <p>Instructions: </p>
            <div className="playButton" onClick={startTest}>
                <input type="hidden" className="playAudio"></input>
            </div>
            <div className="slider">
                <form className="knob" ref={knob} onMouseDown={isPlaying ? startRotation: undefined}>
                    <input type="hidden" className="tempoKnob"></input>
                </form>
            </div>
            <script type="module" src="shifter.js"></script>
            <script type="module" src="TempoDemo.js"></script>
          </div>
     );
}
 
export default TempoDemo;