export const Description = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent">
        ↑↓→← Arrow-game description
      </h1>
      <p className="text-xl">
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </p>
      <p className="text-xl">
        After three consecutive successful hits - game won, after three errors -
        lost.
      </p>
    </div>
  );
};
