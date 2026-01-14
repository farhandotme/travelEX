const colors: Record<number, string> = {
  1: "#F26A4B",
  2: "#E6C84F",
  3: "#7BC96F",
  4: "#5EC9B7",
  5: "#5DADE2",
  6: "#5B6CFF",
  7: "#9B6BFF",
  8: "#D16DDB",
  9: "#E15C6C",
  10: "#6B6BFF",
};

export const randomNumber = () => {
  const num = Math.floor(Math.random() * 10) + 1;
  return colors[num];
};
