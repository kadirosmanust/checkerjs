const deepEquality = (a: any, b: any) => {
  if (a === b) return true;
  if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;
  const keysA = Object.keys(a),
    keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEquality(a[key], b[key])) return false;
  }
  return true;
};

export default deepEquality;
