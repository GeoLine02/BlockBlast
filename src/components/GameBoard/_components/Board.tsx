interface IBoardProps {
  board: number[][][];
}

const Board = ({ board }: IBoardProps) => {
  return (
    <div className="flex flex-wrap w-[384px] md:w-[512px] rounded-md">
      {board.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="w-12 md:w-16 aspect-square flex items-center justify-center border border-gray-300 bg-gray-200"
          ></div>
        ))
      )}
    </div>
  );
};

// w-6 md:w-10 lg:w-14

export default Board;
