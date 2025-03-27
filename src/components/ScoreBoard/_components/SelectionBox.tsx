import { IBlock } from "../../../types/block";
import Block from "../../GameBoard/_components/Block";

interface ISelectionBoxProps {
  obtainableBlocks: IBlock[];
  handleDragStart: (block: IBlock, e: React.DragEvent) => void;
}

const SelectionBox = ({
  obtainableBlocks,
  handleDragStart,
}: ISelectionBoxProps) => {
  return (
    <div className="flex gap-3">
      {obtainableBlocks.map((block: IBlock) => (
        <div
          key={block.id}
          draggable
          onDragStart={(e) => handleDragStart(block, e)}
          className="flex gap-1 cursor-grab"
        >
          {/* Render block shape */}
          <Block block={block} handleDragStart={handleDragStart} />
        </div>
      ))}
    </div>
  );
};

export default SelectionBox;
