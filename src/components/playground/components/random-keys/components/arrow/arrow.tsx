import { useAppSelector } from "../../../../../../app/hooks";
import { MAP_ARROW_CODES } from "../../../../constants";
import { IPlaygroundStepsState } from "../../../../store/types";

export const Arrow = () => {
  const state = useAppSelector((state) => state.playground);
  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return "bg-green-500";
    }
    if (!element.success && element.success !== null) {
      return "bg-red-500";
    }
    return "bg-gray-500";
  };
  return (
    <>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {String(
            MAP_ARROW_CODES[
              element.currentValue as keyof typeof MAP_ARROW_CODES
            ],
          ) || "?"}
        </span>
      ))}
    </>
  );
};
