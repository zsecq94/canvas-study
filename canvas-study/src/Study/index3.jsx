import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const CircleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let scaleValue = 1;
    let rotationValue = 0;

    const toRadian = (d) => {
      return (d * Math.PI) / 180;
    };

    const draw = () => {
      // 캔버스 지우기
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 캔버스 저장
      ctx.save();

      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // 위치 이동
      ctx.translate(250, 250);

      // 스케일
      ctx.scale(scaleValue, scaleValue);

      // 회전
      ctx.rotate(toRadian(rotationValue));

      // 속 없는 사각형
      ctx.strokeRect(-50, -50, 100, 100);
      ctx.restore();
      scaleValue += 0.001;
      rotationValue += 1;

      // 속까지 채운 사각형
      ctx.fillRect(10, 10, 30, 30);

      requestAnimationFrame(draw);
    };
    draw();
  }, []);
  return (
    <Container>
      <h1>Transform</h1>
      <canvas className="canvas" width="500" height="500" ref={canvasRef} />
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
