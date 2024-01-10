import { useState } from "react";

// Icons
import { IoClose } from "react-icons/io5";
import { VscMicFilled } from "react-icons/vsc";
import { FaStop, FaPlay } from "react-icons/fa";
import { BsFillSendArrowUpFill } from "react-icons/bs";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);

  const startRecording = () => {
    setIsRecording(true);
    setIsPlaying(false);
    setRecordedAudio(null);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsPlaying(true);
    setRecordedAudio([]);
  };

  const closeAudio = () => {
    setIsRecording(false);
    setIsPlaying(false);
    setRecordedAudio(null);
  };

  const sendAudio = () => {};

  const startPlaying = () => {};

  return (
    <div className="absolute bottom-40">
      {!isPlaying && !isRecording && !recordedAudio && (
        <div
          className="w-14 h-14 bg-pink rounded-full flex items-center justify-center cursor-pointer"
          onClick={startRecording}
        >
          <VscMicFilled className="text-xl text-white" />
        </div>
      )}
      {!isPlaying && isRecording && !recordedAudio && (
        <div className="flex w-[400px] h-14 items-center rounded bg-pink">
          <div className="flex w-[15%] h-[70%] items-center justify-center border-r border-r-white">
            <p className="text-white text-base">1:2</p>
          </div>
          <div className="w-[300px]"></div>
          <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-white">
            <FaStop
              className="text-white text-xl cursor-pointer"
              onClick={stopRecording}
            />
          </div>
        </div>
      )}
      {isPlaying && !isRecording && recordedAudio && (
        <div className="flex w-[400px] h-14 items-center rounded bg-pink">
          <div className="flex w-[15%] h-[70%] items-center justify-center border-r border-r-white">
            <FaPlay
              className="text-white text-xl cursor-pointer"
              onClick={startPlaying}
            />
          </div>
          <div className="w-[250px]"></div>
          <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-white">
            <BsFillSendArrowUpFill
              className="text-white text-xl cursor-pointer"
              onClick={sendAudio}
            />
          </div>
          <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-white">
            <IoClose
              className="text-white text-xl cursor-pointer"
              onClick={closeAudio}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Record;
