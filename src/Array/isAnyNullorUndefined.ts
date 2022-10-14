const isAnyNullorUndefined = (arr: any[]): boolean => {
  return !arr.every(item => {
    return item !== null && item !== undefined;
  });
};

export default isAnyNullorUndefined;
