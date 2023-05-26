/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Animation = () => {
  const canvasRef = useRef(null);
  let xPos = [0, 500];
  let stars = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    for (let index = 0; index < 60; index++) {
      const x = xPos[Math.floor(Math.random() * 2)];
      const y = Math.floor(Math.random() * canvas.height);
      const check = x === 500 ? 0 : 1;
      const speed = Math.random() * 3;
      const size = Math.floor(Math.random() * 3);
      const lst = { x: x, y: y, size: size, startend: check, speed: speed };
      stars.push(lst);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2, false);
        if (star.startend === 0) {
          if (star.x < 0) {
            star.x = canvas.width;
          } else {
            star.x -= star.speed;
          }
        } else {
          if (star.x > canvas.width) {
            star.x = 0;
          }
          star.x += star.speed;
        }

        ctx.fillStyle = "#f4d03f";
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  return (
    <Container>
      <h1>setInterval</h1>
      <canvas className="canvas" width="500" height="250" ref={canvasRef} />
    </Container>
  );
};

export default Animation;

const Container = styled.div`
  padding: 1rem;
  .canvas {
    background: linear-gradient(to bottom, #0a192f, #020c1b, #243c5a, #8f3985);
  }
`;
