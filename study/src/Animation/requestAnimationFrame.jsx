/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Animation = () => {
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    const canvas = document.querySelector(".canvas");
    setCanvas(canvas);
    setCtx(canvas.getContext("2d"));
  }, []);

  useEffect(() => {
    if (ctx) {
      draw();
    }
  }, [ctx]);
  let xPos = 10;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(xPos, 150, 10, 0, Math.PI * 2, false);
    ctx.fill();
    if (xPos > 600) {
      xPos = 10;
    } else {
      xPos += 1;
    }
    requestAnimationFrame(draw);
  };

  return (
    <Container>
      <h1>requestAnimationFrame</h1>
      <canvas className="canvas" width="600" height="400" />
    </Container>
  );
};

export default Animation;

const Container = styled.div`
  padding: 1rem;
  .canvas {
    background-color: #eee;
  }
`;
