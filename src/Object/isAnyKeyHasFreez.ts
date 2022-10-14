const isAnyKeyHasFreez = (obj: any) => {
  return Object.keys(obj).some(key => Object.isFrozen(obj[key]));
};

export default isAnyKeyHasFreez;
