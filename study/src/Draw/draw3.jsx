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

  const 라디안 = (각도) => {
    return (각도 * Math.PI) / 180;
  };

  const draw = () => {
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, 라디안(360), false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(500, 100, 20, 0, 라디안(360), false);
    ctx.stroke();
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
