import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Controls } from "./components/controls";
import { useState, useEffect, useRef } from "react";
import { setCurrentStep } from "./store/slices";
import { TIMER_CONSTANT } from "./constants";

export const Playground = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  const [isTimerActive, setIsTimerActive] = useState(false);
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setCurrentStep());
      }, TIMER_CONSTANT);
    } else if (refreshIntervalId.current !== null) {
      clearInterval(refreshIntervalId.current);
      refreshIntervalId.current = null;
    }
    return () => {
      if (refreshIntervalId.current !== null) {
        clearInterval(refreshIntervalId.current);
      }
    };
  }, [isTimerActive, dispatch]);

  return (
    <>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
    </>
  );
};
