// Icons
import { FaPlay } from "react-icons/fa";

const Audio = () => {
  return (
    <div className="w-full h-14 bg-gray rounded flex items-center justify-between">
      <div className="flex w-[15%] h-[70%] items-center justify-center border-r border-r-grayish ml-1">
        <FaPlay className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Audio;
