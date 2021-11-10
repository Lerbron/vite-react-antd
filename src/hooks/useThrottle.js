import {
  useCallback
} from "react";

// 节流hooks

let defaultFn = () => {}

export default function useThrottle(func = defaultFn, delay = 300, ...dependency) {
  let timer = null;
  let startTime = Date.now();
  return useCallback((...args) => {
    let curTime = Date.now();
    let remaining = delay - (curTime - startTime);
    let context = this;
    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, remaining);
    }
  }, [delay, dependency])
}