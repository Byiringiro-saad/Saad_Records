import { useRef } from "react";
import { useWavesurfer } from "@wavesurfer/react";

// Icons
import { FaPlay } from "react-icons/fa";

const Audio = ({ audio }) => {
  const wavesRef = useRef(null);

  const { wavesurfer } = useWavesurfer({
    container: wavesRef,
    url: audio?.url || null,
    waveColor: "#101010",
    progressColor: "#FD6662",
    cursorColor: "#E6E6E6",
    height: 50,
  });

  const tooglePlaying = () => {
    wavesurfer.playPause();
  };

  return (
    <div className="w-full h-14 bg-gray rounded flex items-center justify-between">
      <div className="flex w-[15%] h-[70%] items-center justify-center border-r border-r-grayish ml-1">
        <FaPlay className="cursor-pointer" onClick={tooglePlaying} />
      </div>
      <div className=" w-[200px] px-2" ref={wavesRef} />
    </div>
  );
};

export default Audio;
