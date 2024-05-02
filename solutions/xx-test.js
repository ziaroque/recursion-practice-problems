const countToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  countToTen(num + 1);
};

// countToTen();

const fibonacci = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  return fibonacci(num - 1, [
    ...array,
    array[array.length - 2] + array[array.length - 1],
  ]);
};

console.log(fibonacci(12));
