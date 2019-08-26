export const changeBackground = color => {
  return {
    type: "CHANGE_BACKGROUND",
    payload: {
      color
    }
  };
};
export const startTimer = value => {
  return {
    type: "START_TIMER",
    payload: {
      value
    }
  };
};
