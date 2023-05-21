import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Draw = () => {
  const [context, setContext] = useState(null);
  useEffect(() => {
    const canvas = document.querySelector(".canvas");
    setContext(canvas.getContext("2d"));
  }, []);

  useEffect(() => {
    if (context) {
      draw();
    }
  }, [context]);

  const draw = () => {
    context.fillRect(50, 50, 100, 100);
    context.fillStyle = "red";
    context.fillRect(0, 0, 100, 100);
    context.clearRect(80, 80, 50, 50);
    context.strokeRect(150, 150, 100, 100);
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
