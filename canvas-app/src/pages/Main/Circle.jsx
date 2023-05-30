import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Main = () => {
  const canvasRef = useRef(null);
  let width = window.innerWidth;
  let height = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");
    const mouse = {
      x: width / 2,
      y: height / 2,
    };

    const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomColor = (colors) => {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Event Listeners
    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener("resize", handleResize);

    // Circle Class
    class Circle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = randomColor(colors);
        this.radians = Math.random() * Math.PI * 2;
        this.distanceFromCenter = randomInt(10, 10);
        this.lastMouse = { x: x, y: y };
      }

      update() {
        const lastPoint = { x: this.x, y: this.y };
        this.radians += 0.05;
        this.x =
          this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y =
          this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint);

        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;
      }

      draw(lastPoint) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.radius;
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    let circles;

    function init() {
      circles = [];

      for (let i = 0; i < 70; i++) {
        const radius = Math.random() * 2 + 1;
        circles.push(new Circle(width / 2, height / 2, radius, "blue"));
      }
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fillRect(0, 0, width, height);

      circles.forEach((circle) => {
        circle.update();
      });
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <canvas className="canvas" ref={canvasRef}></canvas>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  .canvas {
    border: 1px solid black;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* background-color: orange; */
  }
`;
