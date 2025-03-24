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
    <div>
      <h3>Pressed Key</h3>
      <div>{keyPressedELement}</div>
    </div>
  );
};
