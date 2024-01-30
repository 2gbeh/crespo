export const COLOR = Object.freeze([
  "#9c27b0",
  "#e91e63",
  "#f44336",
  "#ff5722",
  "#009688",
  "#4caf50",
  "#3f51b5",
  "#2196f3",
  "#607d8b",
  "#ff9800",
  "#ffc107",
  "#795548",
]);

export const getRandomColor = () => {
  let i = Math.floor(Math.random() * (COLOR.length - 0 + 1)) + 0;
  return COLOR[i];
};

const colorHistory: Record<string, string> = {};

export const getColor = (text: string): string => {
  if (text) {
    if (text in colorHistory) {
      return colorHistory[text];
    } else {
      const newColor = getRandomColor();
      colorHistory[text] = newColor;
      return newColor;
    }
  }
  return "#000";
};

export const getInitials = (x: any): string => {
  let str = x.toString().trim();
  let arr = str.split(" ");
  //
  return x
    ? arr.length > 1
      ? arr[0][0] + arr[1][0]
      : str.length > 1
      ? str.slice(0, 2)
      : str[0] + str[0]
    : "na";
};
