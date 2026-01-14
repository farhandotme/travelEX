const colors: Record<number, string> = {
  1: "#F26A4B", // coral
  2: "#E6C84F", // warm yellow (white still visible)
  3: "#7BC96F", // soft green
  4: "#5EC9B7", // teal
  5: "#5DADE2", // sky blue
  6: "#5B6CFF", // indigo
  7: "#9B6BFF", // purple
  8: "#D16DDB", // pink violet
  9: "#E15C6C", // rose red
  10: "#6B6BFF", // blue violet
};

export const randomNumber = () => {
  const num = Math.floor(Math.random() * 10) + 1;
  return colors[num];
};
