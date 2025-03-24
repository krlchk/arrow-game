interface IResultMessage {
  isSuccessedEndGame: boolean;
}

export const ResultMessage = ({ isSuccessedEndGame }: IResultMessage) => {
  return isSuccessedEndGame ? <span>You win!</span> : <span>You lose(</span>;
};
