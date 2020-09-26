export const enumHelper = {
  map<R, E>(targetEnum: E | Object, callback: (value: string, key: number) => R) {
    const keys = Object.keys(targetEnum);
    const result: R[] = keys.slice(0, keys.length / 2).map(key => {
      const numericKey = Number(key);
      const value = (targetEnum as any[])[numericKey];
      const newValue = callback(value, numericKey);
      return newValue;
    });

    return result;
  }
};