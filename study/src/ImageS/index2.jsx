/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Animation = () => {
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);
  let xPos = [0, 500];
  let stars = [];

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

  const draw = () => {
    const imgElem = new Image();
    imgElem.src = "/images/ilbuni1.png";
    imgElem.addEventListener("load", () => {
      ctx.drawImage(imgElem, 50, 50);
      ctx.drawImage(imgElem, 50, 50, 70, 120);
      ctx.drawImage(imgElem, 100, 100, 200, 200, 0, 0, 100, 100);
    });
  };

  return (
    <Container>
      <canvas className="canvas" width="600" height="400" />
    </Container>
  );
};

export default Animation;

const Container = styled.div`
  padding: 1rem;
  .canvas {
    background-color: #eee;
    /* background: linear-gradient(to bottom, #0a192f, #020c1b, #243c5a, #8f3985); */
  }
`;
