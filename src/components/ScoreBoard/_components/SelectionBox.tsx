interface ISelectionBoxProps {
  obtainableBlocks: number[][][];
}

const SelectionBox = ({ obtainableBlocks }: ISelectionBoxProps) => {
  return (
    <div className="w-full rounded-xl border border-black min-h-[200px] flex gap-4 items-center justify-around p-4">
      {obtainableBlocks.map((block, blockIndex) => (
        <div key={blockIndex} className="flex flex-col cursor-pointer">
          {block.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-12 md:w-16 aspect-square ${
                    cell && "bg-blue-500"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SelectionBox;
