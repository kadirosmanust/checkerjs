type options = {
  ignoreSpaces?: boolean;
  seperate?: boolean;
};
const howManyCharAtStr = (
  str: string,
  opt: options = {
    ignoreSpaces: true,
    seperate: false,
  },
) => {
  const chars = {
    count: 0,
    charCounts: {} as Record<string, number>,
  };
  const charArr = str.split("");

  for (const char of charArr) {
    if (char === " " && !opt.ignoreSpaces) continue;
    if (!opt.seperate) chars.count++;
    else {
      if (!chars.charCounts[char]) chars.charCounts[char] = 1;
      else chars.charCounts[char]++;
      chars.count++;
    }
  }

  if (!opt.seperate) return chars.count;
  return chars;
};

export default howManyCharAtStr;
