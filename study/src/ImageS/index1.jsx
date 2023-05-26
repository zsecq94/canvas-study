/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Animation = () => {
  const [canvas, setCanvas] = useState(null);
  const [control, setControl] = useState(null);
  const [saveBtn, setSaveBtn] = useState(null);
  const [resultImg, setResultImg] = useState(null);
  const [ctx, setCtx] = useState(null);
  let drawingMode = false;
  let brush = "color";
  let colorVal = "black";

  const imgElem = new Image();
  imgElem.src = "/images/ilbuni2.png";

  useEffect(() => {
    const canvas = document.querySelector(".canvas");
    const control = document.querySelector(".control");
    const saveBtn = document.querySelector(".save-btn");
    const resultImg = document.querySelector(".result-img");
    setControl(control);
    setCanvas(canvas);
    setSaveBtn(saveBtn);
    setResultImg(resultImg);
    setCtx(canvas.getContext("2d"));
  }, []);

  useEffect(() => {
    if (ctx) {
      draw();
    }
  }, [ctx]);

  const downHandler = () => {
    drawingMode = true;
  };
  const upHandler = () => {
    drawingMode = false;
  };

  const moveHandler = (e) => {
    if (!drawingMode) {
      return;
    }

    if (brush === "color") {
      ctx.beginPath();
      ctx.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2, false);
      ctx.fill();
    } else {
      ctx.drawImage(imgElem, e.offsetX, e.offsetY, 50, 50);
    }
  };

  const setColor = (e) => {
    console.log(e.target.getAttribute("data-type"));
    brush = e.target.getAttribute("data-type");
    colorVal = e.target.getAttribute("data-color");
    ctx.fillStyle = colorVal;
  };

  const createImage = () => {
    const url = canvas.toDataURL("image/png");
    const imgElem = new Image();
    imgElem.src = url;
    resultImg.appendChild(imgElem);
  };

  const draw = () => {
    canvas.addEventListener("mousedown", downHandler);
    canvas.addEventListener("mousemove", moveHandler);
    canvas.addEventListener("mouseup", upHandler);
    control.addEventListener("click", setColor);
    saveBtn.addEventListener("click", createImage);
  };

  return (
    <Container>
      <canvas className="canvas" width="600" height="400" />
      <div className="control">
        <button
          className="color-btn"
          data-type="color"
          data-color="black"
        ></button>
        <button
          className="color-btn"
          data-type="color"
          data-color="red"
        ></button>
        <button
          className="color-btn"
          data-type="color"
          data-color="green"
        ></button>
        <button
          className="color-btn"
          data-type="color"
          data-color="blue"
        ></button>
        <button className="img-btn" data-type="img"></button>
      </div>
      <button className="save-btn">이미지 저장</button>
      <div className="result-img"></div>
    </Container>
  );
};

export default Animation;

const Container = styled.div`
  padding: 1rem;
  .canvas {
    background-color: #eee;
  }
  .control {
    display: flex;
    justify-content: center;
    gap: 1rem;
    .color-btn {
      /* border: none; */
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .color-btn[data-color="black"] {
      background-color: black;
    }
    .color-btn[data-color="red"] {
      background-color: red;
    }
    .color-btn[data-color="green"] {
      background-color: green;
    }
    .color-btn[data-color="blue"] {
      background-color: blue;
    }
    .img-btn {
      width: 30px;
      height: 30px;
      background: url(/images/ilbuni2.png) no-repeat 50% 50% / cover;
    }
  }
  .result-img {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #eee;
  }
`;
