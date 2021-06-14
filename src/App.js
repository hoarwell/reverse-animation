import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [reverse, setReverse] = useState(true);

  const handleMouseOn = (e) => {
    let x = 3.5;

    if(e && e.target){
      e.target.style.zIndex = 999;
      e.target.style.transform = `scale(${x})`;
    }
    if(x >= 1.3) {
      setReverse(true);
    }
    if(x < 1.3) {
      setReverse(false);
    }
    if(!reverse) {
      x++;
    } else {
      x--;
    }
    requestAnimationFrame(handleMouseOn);
  }

  const handleMouseOut = (e) => {
    let x = 1;
    e.target.style.zIndex = 0;
    e.target.style.transform = `scale(${x})`;
  }

  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, i) => {
      circle.setAttribute('data-id', i)
      circle.addEventListener('mouseover', handleMouseOn);
      circle.addEventListener('mouseout', handleMouseOut);
    })

    return () => {
      circles.forEach((circle, i) => {
          circle.removeEventListener('click', handleMouseOn);
          circle.removeEventListener('mouseout', handleMouseOut);
      })

      cancelAnimationFrame(handleMouseOn);
    }
  })

  return (
    <div className="App">
      <div className = "container">
        <div className = "row 1">
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
        </div>
        <div className = "row 2">
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
        </div>
        <div className = "row 3">
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
        </div>
        <div className = "row 4">
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
        </div>
        <div className = "row 5">
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
          <div className = "circle"></div>
        </div>
      </div>
    </div>
  );
}

export default App;