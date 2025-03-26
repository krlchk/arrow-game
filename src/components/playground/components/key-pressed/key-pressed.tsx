import { useCallback, useEffect } from "react";
import { ARR_ARROW_CODES } from "../../constants";
import { useAppDispatch } from "../../../../app/hooks";
import { setEnteredValue } from "../../store/slices";
import { useKeyPressedElement } from "./hooks";

export interface IKeyPressed {
  isTimerActive: boolean;
}

export const KeyPressed = ({ isTimerActive }: IKeyPressed) => {
  const keyPressedELement = useKeyPressedElement();
  const dispatch = useAppDispatch();
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (ARR_ARROW_CODES.includes(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key));
      }
    },
    [dispatch, isTimerActive],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="flex flex-col gap-3">
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent">
        Key pressed
      </h1>
      <p className="text-xl">
        Press the key corresponding to the key in "Random keys"
      </p>
      <div className="flex h-16 w-16 items-center justify-center rounded-full text-4xl">
        {keyPressedELement}
      </div>
    </div>
  );
};
