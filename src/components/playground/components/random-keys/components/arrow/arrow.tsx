import { useAppSelector } from "../../../../../../app/hooks";
import { MAP_ARROW_CODES } from "../../../../constants";
import { IPlaygroundStepsState } from "../../../../store/types";
import clsx from "clsx";

export const Arrow = () => {
  const state = useAppSelector((state) => state.playground);
  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return "bg-green-500";
    }
    if (!element.success && element.success !== null) {
      return "bg-red-500";
    }
    return "bg-[#8b8b8b]/50";
  };
  return (
    <div className="flex gap-3">
      {state.steps.map((element) => (
        <span
          key={element.step}
          className={clsx(
            getStylesRandomKeys(element),
            "flex h-16 w-16 items-center justify-center rounded-full text-4xl",
          )}
        >
          {String(
            MAP_ARROW_CODES[
              element.currentValue as keyof typeof MAP_ARROW_CODES
            ],
          ) || "?"}
        </span>
      ))}
    </div>
  );
};
