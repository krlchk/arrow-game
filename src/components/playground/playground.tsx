import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Controls } from "./components/controls";
import { useState, useEffect, useRef } from "react";
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices";
import { END_GAME_CONDITIONS, TIMER_CONSTANT } from "./constants";
import { RandomKeys } from "./components/random-keys";
import { KeyPressed } from "./components/key-pressed";
import { Score } from "./components/score";
import { Modal } from "./components/modal";
import { Description } from "./components/description";

export const Playground = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isSuccessedEndGame, setIsSuccessedEndGame] = useState<boolean>(false);
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
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

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT;
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT;

    if (isSuccessful) {
      setIsSuccessedEndGame(true);
    } else if (isUnsuccessful) {
      setIsSuccessedEndGame(false);
    }

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [state.totalSuccessful, state.totalUnsuccessful]);

  return (
    <section className="m-auto mx-10 mt-10 flex max-w-[1300px] justify-between gap-3">
      <div className="flex w-1/2 flex-col gap-5 rounded-3xl border border-amber-300 p-7">
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className="flex w-1/2 flex-col gap-5 rounded-3xl border border-amber-300 p-7">
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>

      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessedEndGame={isSuccessedEndGame}
        />
      )}
    </section>
  );
};
