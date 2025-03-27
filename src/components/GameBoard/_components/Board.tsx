import { useDroppable } from "@dnd-kit/core";

interface IBoardProps {
  board: number[][];
  handleDrop: (rowIndex: number, colIndex: number) => void;
}

const Board = ({ board, handleDrop }: IBoardProps) => {
  const { setNodeRef } = useDroppable({
    id: "board",
  });

  return (
    <div className="grid grid-cols-8 border border-gray-400 p-2 rounded">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            ref={setNodeRef}
            key={`${rowIndex}-${colIndex}`}
            onDrop={() => handleDrop(rowIndex, colIndex)}
            onDragOver={(e) => e.preventDefault()}
            className={`w-10 h-10 border border-gray-100 ${
              cell ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))
      )}
    </div>
  );
};

export default Board;
