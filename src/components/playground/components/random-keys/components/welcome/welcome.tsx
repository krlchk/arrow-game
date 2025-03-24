interface IWelcomeProps {
  isTimerActive: boolean;
}

export const Welcome = ({ isTimerActive }: IWelcomeProps) => {
  if (isTimerActive) {
    return <span>Loading...</span>;
  }
  return <span>Press "Play" to start game!</span>;
};
