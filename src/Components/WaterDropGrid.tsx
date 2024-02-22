import React from "react";
import anime from "animejs";

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

function WaterDropGrid() {
  const dots = [];
  let index = 0;

  const handleDotClick = (e: any) => {
    const value = e.target.getAttribute("data-index");

    console.log(value);

    anime({
      targets: ".dot-point",
      scale: [
        {
          value: 1.35,
          easing: "easeOutSine",
          duration: 250,
        },
        {
          value: 1,
          easing: "easeOutSine",
          duration: 500,
        },
      ],
      translateY: [
        {
          value: -15,
          easing: "easeOutSine",
          duration: 250,
        },
        {
          value: 0,
          easing: "easeOutSine",
          duration: 500,
        },
      ],
      opacity: [
        {
          value: 1,
          easing: "easeOutSine",
          duration: 250,
        },
        {
          value: 0.5,
          easing: "easeOutSine",
          duration: 500,
        },
      ],
      delay: anime.stagger(100, {
        from: value,
        grid: [GRID_WIDTH, GRID_HEIGHT],
      }),
    });
  };

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-2 group hover:bg-gray-500"
          key={`${i}-${j}`}
          data-index={index}
        >
          <div className="dot-point h-2 w-2 rounded-full bg-gray-500/90 group-hover:bg-secondary"></div>
        </div>
      );
      index++;
    }
  }

  return (
    <div
      className={`grid w-fit gap-8 inset-0 overflow-hidden fixed grid-cols-[repeat(25,1fr)]`}
    >
      {dots}
    </div>
  );
}

export default WaterDropGrid;
