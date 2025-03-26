import { useAppSelector } from "../../../../app/hooks";

export const Score = () => {
  const useSelector = useAppSelector((state) => state.playground);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent">
        Score
      </h1>
      <p className="text-xl">
        On error, the "Consecutive successful hits" value is reset to zero
      </p>
      <div className="flex gap-2">
        <p className="rounded-lg border border-green-500 px-2 py-0.5 text-xl text-green-500">
          Successful: {useSelector.totalSuccessful}
        </p>
        <p className="rounded-lg border border-red-500 px-2 py-0.5 text-xl text-red-500">
          Unsuccessful: {useSelector.totalUnsuccessful}
        </p>
      </div>
    </div>
  );
};
