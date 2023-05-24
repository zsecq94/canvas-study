// canvas 기본 구조
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const CircleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillRect(250, 150, 100, 100);

    const clickHandler = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      if (x < 350 && x > 250 && y < 250 && y > 150) {
        console.log("박스 선택함");
      }
    };

    canvas.addEventListener("click", clickHandler);
  }, []);
  return (
    <Container>
      <h1>Interaction</h1>
      <canvas className="canvas" width="600" height="400" ref={canvasRef} />
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
