import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as dat from "dat.gui";

const Main = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const gui = new dat.GUI();
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /** @type {CanvasRenderingContext2D} */
    const c = canvas.getContext("2d");

    const wave = {
      y: canvas.height / 2,
      length: 0.01,
      amplitude: 100,
      frequency: 0.01,
    };

    const strokeColor = {
      h: 200,
      s: 50,
      l: 50,
    };

    const backgroundColor = {
      r: 0,
      g: 0,
      b: 0,
      a: 0.01,
    };

    const waveFolder = gui.addFolder("wave");
    waveFolder.add(wave, "y", 0, canvas.height);
    waveFolder.add(wave, "length", -0.01, 0.01);
    waveFolder.add(wave, "amplitude", -300, 300);
    waveFolder.add(wave, "frequency", -0.01, 1);
    waveFolder.open();

    const strokeFolder = gui.addFolder("stroke");
    strokeFolder.add(strokeColor, "h", 0, 255);
    strokeFolder.add(strokeColor, "s", 0, 100);
    strokeFolder.add(strokeColor, "l", 0, 100);
    strokeFolder.open();

    const backgroundFolder = gui.addFolder("background");
    backgroundFolder.add(backgroundColor, "r", 0, 255);
    backgroundFolder.add(backgroundColor, "g", 0, 255);
    backgroundFolder.add(backgroundColor, "b", 0, 255);
    backgroundFolder.add(backgroundColor, "a", 0, 1);
    backgroundFolder.open();

    let increment = wave.frequency;

    const animate = () => {
      requestAnimationFrame(animate);
      c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.beginPath();
      c.moveTo(0, canvas.height / 2);
      for (let i = 0; i < canvas.width; i++) {
        c.lineTo(
          i,
          wave.y + Math.sin(i * wave.length + increment) * wave.amplitude
        );
      }
      c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`;
      c.stroke();
      increment += wave.frequency;
    };
    animate();
  }, []);

  return (
    <Container>
      <canvas className="canvas" ref={canvasRef}></canvas>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  .canvas {
    border: 1px solid black;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`;
