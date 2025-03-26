import { useAppDispatch } from "../../../../app/hooks";
import { Button } from "../../../../UI";
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
    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-[#8b8b8b]/50 backdrop-blur-sm">
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent">
        Modal
      </h1>
      <ResultMessage isSuccessedEndGame={isSuccessedEndGame} />
      <br />
      <Button
        className="cursor-pointer rounded border border-black px-2 text-2xl disabled:border-gray-400 disabled:text-gray-400"
        onClick={handleClose}
      >
        Start new game!
      </Button>
    </div>
  );
};
