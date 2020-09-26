export const enumHelper = {
  map<R, E>(targetEnum: E | Object, callback: (value: string, key: number) => R) {
    const result: R[] = Object.keys(targetEnum).slice(0, Object.keys(targetEnum).length / 2).map(key => {
      const numericKey = Number(key);
      const value = (targetEnum as any[])[numericKey];
      const newValue = callback(value, numericKey);
      return newValue;
    });

    return result;
  }
};