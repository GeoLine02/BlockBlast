const HomePage = () => {
  return (
    <div className="bg-blue-800 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-500">Block Blast Game</h1>
        {/* <img src="" alt="Block Blast Image" /> */}
        <div className="flex flex-col gap-4 mt-16 w-fit">
          <button className="bg-blue-400 cursor-pointer p-4 px-12 rounded-xl">
            Start Game
          </button>
          <button className="bg-blue-400 p-4 px-12 cursor-pointer rounded-xl">
            Score Board
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
