import "./App.css";
import ZXCZXC from "./Study/index1";

function App() {
  return (
    <div className="App">
      <ZXCZXC />
    </div>
  );
}

export default App;

// canvas 기본 구조
// import React, { useRef, useEffect } from "react";
// import styled from "styled-components";

// const CircleAnimation = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let positionX = 0;
//     const velocityX = 1; // 원의 속도

//     const animate = () => {
//       // Canvas 초기화
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // 원 그리기
//       ctx.beginPath();
//       ctx.arc(positionX, canvas.height / 2, 50, 0, 2 * Math.PI);
//       ctx.fillStyle = "#000";
//       ctx.fill();

//       // 원 이동
//       positionX += velocityX;

//       // 화면 벗어나면 초기 위치로 되돌리기
//       if (positionX > canvas.width) {
//         positionX = -50;
//       }

//       // 다음 프레임 애니메이션 요청
//       requestAnimationFrame(animate);
//     };

//     // 애니메이션 시작
//     animate();
//   }, []);
//   return (
//     <Container>
//       <h1>Transform</h1>
//       <canvas className="canvas" width="500" height="500" ref={canvasRef} />
//     </Container>
//   );
// };

// export default CircleAnimation;

// const Container = styled.div`
//   padding: 2rem;
//   .canvas {
//     background-color: #eee;
//   }
// `;
