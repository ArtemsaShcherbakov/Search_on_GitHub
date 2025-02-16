type TimerType = ReturnType<typeof setTimeout> | null;

const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): T => {
  let lastCall = 0;
  let timer: TimerType = null;

  return ((...args: Parameters<T>) => {
    const now = Date.now();
    const remainingTime = delay - (now - lastCall);

    if (remainingTime <= 0) {
      lastCall = now;
      fn(...args);
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        lastCall = Date.now();
        fn(...args);
      }, remainingTime);
    }
  }) as T;
};

export default throttle;
