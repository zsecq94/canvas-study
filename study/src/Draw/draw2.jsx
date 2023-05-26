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
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(300, 200);
    ctx.stroke();
    ctx.fill();
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
