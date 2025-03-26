import { Button } from "../../../../UI";
import { PlayArrow, Pause } from "@mui/icons-material";
export interface IControlsProps {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Controls = ({
  isTimerActive,
  setIsTimerActive,
}: IControlsProps) => {
  return (
    <>
      <div className="flex gap-2">
        <Button
          endIcon={<PlayArrow />}
          onClick={() => setIsTimerActive(true)}
          disabled={isTimerActive}
        >
          Start
        </Button>
        <Button
          endIcon={<Pause />}
          onClick={() => setIsTimerActive(false)}
          disabled={!isTimerActive}
        >
          Stop
        </Button>
      </div>
    </>
  );
};
