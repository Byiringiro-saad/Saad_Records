/* eslint-disable react-hooks/exhaustive-deps */
import { ReactMic } from "react-mic";
import { useWavesurfer } from "@wavesurfer/react";
import { useEffect, useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Icons
import { IoClose } from "react-icons/io5";
import { VscMicFilled } from "react-icons/vsc";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { FaStop, FaPlay, FaPause } from "react-icons/fa";

// Firebase
import { auth, db } from "../firebase";

const Record = () => {
  // show states
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);

  // action states
  const [timer, setTimer] = useState(0);
  const [playing, setPlaying] = useState(false);

  // current user
  const [user] = useAuthState(auth);

  // firebase storege
  const storage = getStorage();

  const wavesRef = useRef(null);

  const { wavesurfer } = useWavesurfer({
    container: wavesRef,
    url: recordedAudio?.blobURL || null,
    waveColor: "#FFFFFF",
    progressColor: "#101010",
    cursorColor: "#FD6662",
    height: 50,
  });

  useEffect(() => {
    if (isRecording) {
      setTimer(0);
      const interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimer(0);
    }
  }, [isRecording]);

  useEffect(() => {
    if (timer === 30) {
      stopRecording();
    }
  }, [timer]);

  const startRecording = () => {
    setIsRecording(true);
    setIsPlaying(false);
    setRecordedAudio(null);

    wavesurfer.empty();
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsPlaying(true);
    setPlaying(false);
  };

  const closeAudio = () => {
    setIsRecording(false);
    setIsPlaying(false);
    setRecordedAudio(null);
  };

  const sendAudio = () => {
    // convert blob to file
    const file = new File([recordedAudio.blob], "audio.wav", {
      type: "audio/wav",
    });

    const storageRef = ref(storage, "Audios/" + user.uid + "/" + file.name);

    // upload file
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        // firebase firestore
        addDoc(collection(db, "Audios"), {
          name: snapshot.metadata.name,
          url: snapshot.metadata.fullPath,
          validated: false,
        }).then(() => {
          closeAudio();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const togglePlaying = () => {
    wavesurfer.playPause();
    setPlaying(!playing);
  };

  const onStop = (recordedBlob) => {
    setRecordedAudio(recordedBlob);
    console.log("recordedBlob is: ", recordedBlob);
  };

  return (
    <div className="absolute bottom-40">
      <div
        className={
          !isPlaying && !isRecording && !recordedAudio
            ? "w-14 h-14 bg-pink rounded-full flex items-center justify-center cursor-pointer"
            : "hidden"
        }
        onClick={startRecording}
      >
        <VscMicFilled className="text-xl text-white" />
      </div>
      <div
        className={
          !isPlaying && isRecording && !recordedAudio
            ? "flex w-[400px] h-14 items-center rounded bg-pink"
            : "hidden"
        }
      >
        <div className="flex w-[15%] h-[70%] items-center justify-center border-r border-r-white">
          <p className="text-white text-base">
            {Math.floor(timer / 60)}:{Math.floor(timer % 60)}
          </p>
        </div>
        <div className="w-[300px] flex items-center justify-center h-full">
          <ReactMic
            record={isRecording}
            backgroundColor="#FD6662"
            strokeColor="#FFFFFF"
            className="w-[95%]"
            onStop={onStop}
          />
        </div>
        <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-white">
          <FaStop
            className="text-white text-xl cursor-pointer"
            onClick={stopRecording}
          />
        </div>
      </div>
      <div
        className={
          isPlaying && !isRecording && recordedAudio
            ? "flex w-[400px] h-14 items-center rounded bg-pink"
            : "hidden"
        }
      >
        <div className="flex w-[15%] h-[70%] items-center justify-center border-r border-r-white">
          {!playing && (
            <FaPlay
              className="text-white text-lg cursor-pointer"
              onClick={togglePlaying}
            />
          )}
          {playing && (
            <FaPause
              className="text-white text-lg cursor-pointer"
              onClick={togglePlaying}
            />
          )}
        </div>
        <div className="w-[250px] px-2" ref={wavesRef} />
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
    </div>
  );
};

export default Record;
