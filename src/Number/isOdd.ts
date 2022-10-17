const isOdd = (n: number) => {
  if (typeof n !== "number" || isNaN(n)) return undefined;
  return Math.abs(n % 2) === 1;
};

export default isOdd;
