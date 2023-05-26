/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Draw = () => {
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    const canvas = document.querySelector(".canvas");
    setCtx(canvas.getContext("2d"));
  }, []);

  useEffect(() => {
    if (ctx) {
      draw();
    }
  }, [ctx]);

  const draw = () => {
    ctx.fillRect(50, 50, 100, 100);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);
    ctx.clearRect(80, 80, 50, 50);
    ctx.strokeRect(150, 150, 100, 100);
  };

  return (
    <Container>
      <canvas className="canvas" width="600" height="400" />
    </Container>
  );
};

export default Draw;

const Container = styled.div`
  padding: 1rem;
  .canvas {
    background-color: #eee;
  }
`;
