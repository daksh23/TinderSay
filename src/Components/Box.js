import React, { useState } from "react";
import { useSprings } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import CardBox from "./CardBox";

const cards = [
  "red",
  "blue",
  "green",
  "yellow",
  "blue",
  "green",
  "yellow",
  "white",
];

var to = function (i) {
  return {
    x: 0,
    y: i * 0,
    scale: 1,
    rot: 0,
    delay: i * 100,
  };
};

var from = function (_i) {
  return { x: 0, rot: 100, scale: 1.5, y: -1000 };
};

// interpolates rotation and scale into a css transform
var trans = function (r, s) {
  return (
    "perspective(1000px) rotateX(0deg) rotateY(" +
    r / 10 +
    "deg) rotateZ(" +
    r +
    "deg) scale(" +
    s +
    ")"
  );
};

function Box() {
  const [gone] = useState(() => new Set());

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      // trigger Fly event
      const trigger = velocity > 0.2;
      // Direct Left or Right
      const dir = xDir < 0 ? -1 : 1;

      // Check trigger and direct is ready to swipe [ based on velocity]
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        // Change spring data one to another
        if (index !== i) return;
        const isGone = gone.has(index);
        // Card go left or right otherwise set back
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        // How much the card tilts, flicking it harder makes it rotate faster
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        // Active cards lift up a bit Like Hover
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <CardBox
          key={i}
          x={x}
          y={y}
          rot={rot}
          scale={scale}
          i={i}
          trans={trans}
          bind={bind}
        />
      ))}
    </>
  );
}

export default Box;
