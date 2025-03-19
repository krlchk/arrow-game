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
        <button
          className="cursor-pointer rounded border border-black px-2 text-2xl disabled:border-gray-400 disabled:text-gray-400"
          onClick={() => setIsTimerActive(true)}
          disabled={isTimerActive}
        >
          Start
        </button>
        <button
          className="cursor-pointer rounded border border-black px-2 text-2xl disabled:border-gray-400 disabled:text-gray-400"
          onClick={() => setIsTimerActive(false)}
          disabled={!isTimerActive}
        >
          Stop
        </button>
      </div>
    </>
  );
};
