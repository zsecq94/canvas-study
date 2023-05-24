import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const CircleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(100, 100, 200, 200);
    ctx.fillStyle = "orange";
    ctx.fillRect(150, 150, 200, 200);
    ctx.save();
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(300, 300, 50, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(300, 300, 20, 0, Math.PI * 2, false);
    ctx.fill();
  }, []);
  return (
    <Container>
      <h1>Transform</h1>
      <canvas className="canvas" width="500" height="500" ref={canvasRef} />
    </Container>
  );
};

export default CircleAnimation;

const Container = styled.div`
  padding: 2rem;
  .canvas {
    background-color: #eee;
  }
`;
