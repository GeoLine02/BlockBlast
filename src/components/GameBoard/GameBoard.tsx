import { useState } from "react";
import SelectionBox from "../ScoreBoard/_components/SelectionBox";
import Board from "./_components/Board";
import { blocks } from "../../data/blocks";

const GameBoard = () => {
  const boardSize = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => [0, 0])
  );
  const [board, setBoard] = useState<number[][][]>(boardSize);

  const getRandomBlocks = (blocks: number[][][], num = 3) => {
    // Shuffle the blocks array
    const shuffledBlocks = blocks.sort(() => 0.5 - Math.random());

    // Return the first 3 random blocks
    return shuffledBlocks.slice(0, num);
  };

  const randomThreeBlock = getRandomBlocks(blocks);

  const [obtainableBlocks, setObtainableBlocks] =
    useState<number[][][]>(randomThreeBlock);

  return (
    <div>
      <div className="flex flex-col items-center container gap-11">
        <Board board={board} />
        <SelectionBox obtainableBlocks={obtainableBlocks} />
      </div>
    </div>
  );
};

export default GameBoard;
