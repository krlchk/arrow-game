import { useAppSelector } from "../../../../app/hooks";

export const Score = () => {
  const useSelector = useAppSelector((state) => state.playground);
  return (
    <div>
      <h1>Successful - {useSelector.totalSuccessful}</h1>
      <h1>Unsuccessful - {useSelector.totalUnsuccessful}</h1>
    </div>
  );
};
