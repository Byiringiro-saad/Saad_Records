import { useRef, useState } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

// Icons
import { FaPlay } from "react-icons/fa";

const Audio = ({ audio }) => {
  const [url, setUrl] = useState(null);

  const wavesRef = useRef(null);

  const storage = getStorage();
  getDownloadURL(ref(storage, audio?.url)).then((u) => setUrl(u));

  const { wavesurfer } = useWavesurfer({
    container: wavesRef,
    waveColor: "#FFFFFF",
    progressColor: "#101010",
    cursorColor: "#FD6662",
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
      <div
        className="flex w-[80%] h-[70%] items-center justify-center border-r border-r-grayish"
        ref={wavesRef}
      />
    </div>
  );
};

export default Audio;
