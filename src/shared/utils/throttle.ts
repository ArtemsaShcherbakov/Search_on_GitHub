type TimerType = number | null;

const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): T => {
  let timer: TimerType = null;

  return ((...args: any[]) => {
    if (timer) return;
    timer = window.setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  }) as T;
};

export default throttle;
