import { useEffect, useState } from "react";
import SelectionBox from "../ScoreBoard/_components/SelectionBox";
import Board from "./_components/Board";
import { blocks } from "../../data/blocks";
import { IBlock } from "../../types/block";
import { v4 as uuidv4 } from "uuid";
import { DndContext } from "@dnd-kit/core";
const BOARD_ROWS = 8;
const BOARD_COLS = 8;

const GameBoard = () => {
  const [board, setBoard] = useState<number[][]>(
    Array(BOARD_ROWS)
      .fill(null)
      .map(() => Array(BOARD_COLS).fill(0))
  );
  const [draggedBlock, setDraggedBlock] = useState<IBlock | null>(null);
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const getRandomBlocks = (blocks: IBlock[], num = 3) => {
    return blocks.sort(() => 0.5 - Math.random()).slice(0, num);
  };

  const [obtainableBlocks, setObtainableBlocks] = useState<IBlock[]>(
    getRandomBlocks(blocks)
  );

  const handleDragStart = (block: IBlock, e: React.DragEvent) => {
    setDraggedBlock(block);
    const blockRect = (e.target as HTMLElement).getBoundingClientRect();
    setCursorOffset({
      x: e.clientX - blockRect.left,
      y: e.clientY - blockRect.top,
    });
  };

  const getRandomBlock = () => blocks[Math.floor(Math.random())];

  useEffect(() => {
    if (obtainableBlocks.length < 3) {
      setObtainableBlocks((prev: IBlock[]) => [
        ...prev,
        {
          id: uuidv4(),
          height: getRandomBlock().height,
          shape: getRandomBlock().shape,
          width: getRandomBlock().width,
        },
      ]);
    }
  }, [obtainableBlocks.length]);

  const handleDrop = (rowIndex: number, colIndex: number) => {
    if (!draggedBlock) return;

    // Adjust the row and column based on where you clicked inside the block
    const adjustedRowIndex = rowIndex - Math.floor(cursorOffset.y / 40); // assuming each grid cell is 40px
    const adjustedColIndex = colIndex - Math.floor(cursorOffset.x / 40); // assuming each grid cell is 40px

    // Ensure the drop position is valid (within bounds of the grid)
    if (
      adjustedColIndex + draggedBlock.width > BOARD_COLS ||
      adjustedRowIndex + draggedBlock.height > BOARD_ROWS ||
      adjustedRowIndex < 0 ||
      adjustedColIndex < 0
    ) {
      return; // Prevent dropping if it exceeds grid bounds
    }

    // Check if the drop area is already occupied
    for (let i = 0; i < draggedBlock.height; i++) {
      for (let j = 0; j < draggedBlock.width; j++) {
        if (draggedBlock.shape[i][j]) {
          if (board[adjustedRowIndex + i][adjustedColIndex + j] !== 0) {
            return; // Prevent drop if a cell is already occupied
          }
        }
      }
    }

    // Create a copy of the grid to avoid direct mutation
    const newGrid = board.map((row) => [...row]);
    // Update the grid with the new block
    for (let i = 0; i < draggedBlock.height; i++) {
      for (let j = 0; j < draggedBlock.width; j++) {
        if (draggedBlock.shape[i][j]) {
          newGrid[adjustedRowIndex + i][adjustedColIndex + j] = 1;
          setObtainableBlocks((prev: IBlock[]) =>
            prev.filter((block: IBlock) => block.id !== draggedBlock.id)
          );
        }
      }
    }

    setBoard(newGrid);
    setDraggedBlock(null);
  };

  return (
    <div>
      <div className="flex flex-col items-center container gap-11">
        <DndContext>
          <Board board={board} handleDrop={handleDrop} />
          <SelectionBox
            handleDragStart={handleDragStart}
            obtainableBlocks={obtainableBlocks}
          />
        </DndContext>
      </div>
    </div>
  );
};

export default GameBoard;
