import { useAppSelector } from "../../../../app/hooks";
import { Arrow } from "./components/arrow";
import { Welcome } from "./components/welcome";

interface IRandomKeysProps {
  isTimerActive: boolean;
}

export const RandomKeys = ({ isTimerActive }: IRandomKeysProps) => {
  const state = useAppSelector((state) => state.playground);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent">
        Random keys
      </h1>
      {state.steps.length === 0 ? (
        <Welcome isTimerActive={isTimerActive} />
      ) : (
        <Arrow />
      )}
    </div>
  );
};
