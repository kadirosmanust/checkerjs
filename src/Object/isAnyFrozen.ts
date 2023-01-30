const isAnyFrozen = (obj: Record<string, unknown>) => {
  if (typeof obj !== "object") {
    throw new Error("The argument must be an object.");
  }

  if (Object.isFrozen(obj)) return true;

  if (Object.keys(obj).length === 0) return false;

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      if (isAnyFrozen(obj[key] as Record<string, unknown>)) return true;
    }
  }

  return false;
};

export default isAnyFrozen;
