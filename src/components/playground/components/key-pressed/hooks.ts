import { useAppSelector } from "../../../../app/hooks";
import { MAP_ARROW_CODES } from "../../constants";

export const useKeyPressedElement = () => {
  const state = useAppSelector((state) => state.playground);
  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue;
    if (enteredValue) {
      return MAP_ARROW_CODES[enteredValue as keyof typeof MAP_ARROW_CODES];
    }
  }

  return "⌛️";
};
