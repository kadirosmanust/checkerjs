function mustFind<T>(array: T[], predicate: (t: T) => boolean): T {
  const item = array.find(predicate);
  if (item === undefined) {
    throw new Error("Item not found");
  }
  return item;
}

export default mustFind;
