interface IWelcomeProps {
  isTimerActive: boolean;
}

export const Welcome = ({ isTimerActive }: IWelcomeProps) => {
  if (isTimerActive) {
    return <span>Loading...</span>;
  }
  return (
    <span className="text-xl">
      Press "Play" to start the game and wait for the first arrow to appear
    </span>
  );
};
