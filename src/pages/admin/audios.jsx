import { useState } from "react";

// Components
import Audio from "../../components/audio";

// Icons
import { MdVerified } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";
import { useQuery } from "react-query";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";

const Audios = () => {
  const [audios, setAudios] = useState([]);

  useQuery("audios-validator", () => {
    const q = query(collection(db, "Audios"));
    getDocs(q).then((querySnapshot) => {
      let audios = [];
      querySnapshot.forEach((doc) => {
        audios.push(doc.data());
      });
      setAudios(audios);
    });
  });

  return (
    <div className="w-full h-auto grid grid-cols-3 gap-6 items-cente pt-4">
      {audios.map((audio, index) => {
        return (
          <div className="flex h-14 w-auto items-center bg-gray rounded">
            <Audio key={index} audio={audio} />
            {audio?.validated && (
              <div className="flex w-[15%] h-[70%] items-center justify-center">
                <MdVerified className="text-pink text-xl cursor-pointer" />
              </div>
            )}
            {!audio?.validated && (
              <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-grayish">
                <AiOutlineStop className="text-black text-xl cursor-pointer" />
              </div>
            )}
          </div>
        );
      })}
      {audios?.length === 0 && (
        <p className="text-base text-grayish col-start-2 text-center mt-10">
          No audios audios
        </p>
      )}
    </div>
  );
};

export default Audios;
