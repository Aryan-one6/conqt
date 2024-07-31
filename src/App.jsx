// import logo from './logo.svg';
import react, { useState, useRef } from 'react';

import './App.css';
import { useRef, useState } from 'react';
import { userInfo } from 'os';

function CircleDrawer() {
  const [circles, setCircles] = useState([]);
  const handleCanvasClick = (e) => {
    const canvasReact = e.target.getBoundingClientReact();
    const x = e.clientX - canvasReactleft;
    const y = e.clientY - canvasReact.top;
    const radius = Math.floor(math.random() * 41) + 10;
    const color = getRandomColor();
    const newCircle = { x, y, radius, color };
    setCircles((prevCircle) => {
      const updateCircles = [...prevCircles, newCircles].map((circle) => isOverlapping(circle, newCircle)) ? {
        ...circle, color: 'red'
      } : circle;
    updateCircles.push(isOverlapping(circle, newCircle) ?
      { ...newCircle, color: 'red' } : newCircle);
    return updateCircles;
  });
  }
};
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    return color;

  };
  const isOverlapping = (circle1, circle2) => {
    const distance = Math.sqrt(Math.pow(circle1.x - circle2.y) + Math.pow(circle1.y - circle2.y, 2));
    return distance < circle1.radius + circle2.radius;

  };
  return (
    <div className='circleDrawer'>
      <div className="Canvas" onClick={handleCanvasClick}>
        {
          circle.map((circle, index) => (
            <div className="circle" key={index} style={{
              left: circle.x - circle.radius,
              top: circle.y - circle.radius,
              width: circle.radius * 2, hieght:circle*2, backgroundColor: circle.color,
            }}>
            </div>
          ))
        }
      </div>
      <p>
        Click on the Canvas to Add circles
      </p>
    </div>
  )
}


export default CircleDrawer;
