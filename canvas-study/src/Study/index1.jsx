// canvas 기본 구조
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const CircleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const boxes = [];

    class Box {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.draw();
      }

      draw() {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(this.x, this.y, 100, 100);
      }
    }

    let tempX, tempY;
    for (let index = 0; index < 10; index++) {
      tempX = Math.random() * canvas.width * 0.8;
      tempY = Math.random() * canvas.height * 0.8;
      boxes.push(new Box(tempX, tempY));
    }
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