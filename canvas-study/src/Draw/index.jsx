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

  const draw = () => {};

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
