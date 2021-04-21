// debounce, throttle 같은 함수들
const debounce = (fn: (...args: any) => void, wait: number) => {
  let lastTimeoutId: NodeJS.Timeout | null = null;

  return (...args: any) => {
    return new Promise((resolve) => {
      if (lastTimeoutId) {
        clearTimeout(lastTimeoutId);
        lastTimeoutId = null;
      }

      lastTimeoutId = setTimeout(() => {
        fn(...args);
        resolve(true);
        lastTimeoutId = null;
      }, wait);
    });
  };
};

export { debounce };
