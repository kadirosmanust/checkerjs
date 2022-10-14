const isInRange = (data: any[], item: any, min: number, max: number) => {
  return data.indexOf(item) >= min && data.indexOf(item) <= max;
};

export default isInRange;
