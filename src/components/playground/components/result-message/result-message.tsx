interface IResultMessage {
  isSuccessedEndGame: boolean;
}

export const ResultMessage = ({ isSuccessedEndGame }: IResultMessage) => {
  return isSuccessedEndGame ? (
    <span className="text-xl">You win!</span>
  ) : (
    <span className="text-xl">You lose(</span>
  );
};
