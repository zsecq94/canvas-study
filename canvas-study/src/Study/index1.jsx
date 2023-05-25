/* eslint-disable default-case */
// canvas 기본 구조
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const CircleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const boxes = [];
    const mousePos = { x: 0, y: 0 };
    ctx.font = "bold 30px sans-serif";
    let oX = canvas.width * 0.5;
    let oY = canvas.height * 0.5;
    let panel;
    let step;

    class Panel {
      constructor() {
        this.scale = 0;
      }

      draw() {
        ctx.fillStyle = "rgba(255,0,0,0.6)";
        // 변환 초기화를 해야 안전
        ctx.resetTransform();
        ctx.translate(oX, oY);
        ctx.scale(this.scale, this.scale);
        ctx.translate(-oX, -oY);
        ctx.fillRect(oX - 150, oY - 150, 300, 300);
        ctx.resetTransform();
      }

      showContent() {
        ctx.fillStyle = "#fff";
        ctx.fillText(selectedBox, oX, oY);
      }
    }

    class Box {
      constructor(index, x, y, size) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 3;
        this.direction = 1;
      }

      draw() {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = "#fff";
        ctx.fillText(this.index, this.x + 10, this.y + 30);
      }
    }

    let selectedBox = null;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      boxes.forEach((box) => {
        let speed = Math.random() * 7 + 2;
        if (box.index === selectedBox) {
          box.draw();
          return;
        }
        if (box.direction % 2 === 1) {
          if (box.x > canvas.width - box.size) {
            box.direction += 1;
            box.speed = speed;
          }

          box.x += box.speed;
        } else {
          if (box.x < 0) {
            box.direction += 1;
            box.speed = speed;
          }
          box.x -= box.speed;
        }
        box.draw();
      });
      switch (step) {
        case 1:
          panel.scale = 0;
          break;

        case 2:
          panel.scale += 0.02;
          panel.draw();
          break;
      }

      requestAnimationFrame(render);
    };

    let tempX, tempY, tempSize;

    const init = () => {
      step = 1;
      for (let index = 0; index < 10; index++) {
        tempX = Math.random() * canvas.width * 0.8;
        tempY = Math.random() * canvas.height * 0.8;
        tempSize = Math.random() * 100 + 50;
        boxes.push(new Box(index + 1, tempX, tempY, tempSize));
      }

      panel = new Panel();

      render();
    };

    canvas.addEventListener("mousemove", (e) => {
      mousePos.x = e.offsetX;
      mousePos.y = e.offsetY;

      if (selectedBox) {
        const box = boxes.find((b) => b.index === selectedBox);
        if (box) {
          box.x = mousePos.x - box.size / 2;
          box.y = mousePos.y - box.size / 2;
        }
      }
    });

    canvas.addEventListener("mousedown", (e) => {
      mousePos.x = e.offsetX;
      mousePos.y = e.offsetY;

      let box;

      for (let i = 0; i < boxes.length; i++) {
        box = boxes[i];

        if (
          mousePos.x >= box.x &&
          mousePos.x <= box.x + box.size &&
          mousePos.y >= box.y &&
          mousePos.y <= box.y + box.size
        ) {
          selectedBox = box.index;
        }
      }
      if (selectedBox) {
        console.log(selectedBox);
        step = 2;
      }
    });

    canvas.addEventListener("mouseup", (e) => {
      if (selectedBox) {
        selectedBox = null;
        step = 1;
      }
    });
    init();
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
