import { useAppSelector } from "../../../../app/hooks";
import { Arrow } from "./components/arrow";
import { Welcome } from "./components/welcome";

interface IRandomKeysProps {
  isTimerActive: boolean;
}

export const RandomKeys = ({ isTimerActive }: IRandomKeysProps) => {
  const state = useAppSelector((state) => state.playground);

  return (
    <div>
      {state.steps.length === 0 ? (
        <Welcome isTimerActive={isTimerActive} />
      ) : (
        <Arrow />
      )}
    </div>
  );
};
