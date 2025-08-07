export const genTicket = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
};

export const sum = (arr) => {
  return arr.reduce((acc, ele) => acc + ele, 0)
};
