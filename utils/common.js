const repeatMultiple = (data, index) => {
  const result = [];

  for (let i = 0; i < index; i++) {
    for (const d of data) {
      result.push(d);
    }
  }

  return result;
};

export { repeatMultiple };
