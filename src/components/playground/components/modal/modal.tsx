import { useAppDispatch } from "../../../../app/hooks";
import { setReset } from "../../store/slices";
import { ResultMessage } from "../result-message/result-message";

interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessedEndGame: boolean;
}

export const Modal = ({ setIsShowModal, isSuccessedEndGame }: IModalProps) => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    setIsShowModal(false);
    dispatch(setReset());
  };

  return (
    <div>
      <h1>Modal</h1>
      <ResultMessage isSuccessedEndGame={isSuccessedEndGame} />
      <br />
      <button
        className="cursor-pointer rounded border border-black px-2 text-2xl disabled:border-gray-400 disabled:text-gray-400"
        onClick={handleClose}
      >
        Start new game!
      </button>
    </div>
  );
};
