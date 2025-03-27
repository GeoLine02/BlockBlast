import { IBlock } from "../../../types/block";
// import { useDraggable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";

interface IBlockProps {
  block: IBlock;
  handleDragStart: (block: IBlock, e: React.DragEvent) => void;
}

const Block = ({ block, handleDragStart }: IBlockProps) => {
  // const { attributes, listeners, setNodeRef, transform } = useDraggable({
  //   id: block.id,
  // });

  // const dragStyle = {
  //   transform: CSS.Translate.toString(transform),
  // };

  return (
    <div
      key={block.id}
      draggable
      onDragStart={(e) => handleDragStart(block, e)}
      className="flex flex-col p-2 cursor-pointer"
      // ref={setNodeRef}
      // {...listeners}
      // {...attributes}
      // style={dragStyle}
    >
      {/* Render block shape */}
      {block.shape.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`w-8 h-8 ${cell ? "bg-blue-500" : "bg-transparent"}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Block;
