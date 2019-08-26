import React from "react";

export default Component => {
  const randomColor = () => {
    const colors = ["orange", "blue", "green", "purple"];
    const max = colors.length - 1;
    const min = 0;
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomColor = colors[randomIndex];
    console.log(randomColor);
    return randomColor;
  };

  return props => <Component {...props} randomColor={randomColor} />;
};
