import { useCallback, useRef, useState } from 'react';

const ONE_MICRO_SECONDS = 1000;
const useTimer = (INITIAL_TIME: number) => {
  const [leftTime, setLeftTime] = useState(INITIAL_TIME);
  const timerRef: { current: NodeJS.Timer | null } = useRef(null);

  const onStartTimer = useCallback(() => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      if (leftTime >= 0) {
        setLeftTime((leftTime) => leftTime - 1);
      } else {
        onClearTimer();
      }
    }, ONE_MICRO_SECONDS);
  }, []);

  const onClearTimer = useCallback(() => {
    if (timerRef.current === null) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const onResetTimer = useCallback(() => {
    onClearTimer();
    setLeftTime(INITIAL_TIME);
    onStartTimer();
  }, []);

  const onSubtractTime = useCallback((time: number) => {
    setLeftTime((leftTime) => leftTime - time);
  }, []);

  return { leftTime, onStartTimer, onClearTimer, onResetTimer, onSubtractTime };
};

export default useTimer;
