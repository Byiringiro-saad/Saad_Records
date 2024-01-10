import { useState } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

// Components
import Audio from "../components/audio";
import Layout from "../components/layout";

// Icons
import { useQuery } from "react-query";
import { MdDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

// Firebase
import { db } from "../firebase";

const Validator = () => {
  const [audios, setAudios] = useState([]);

  const approveAudio = async (id) => {
    const audioRef = doc(collection(db, "Audios"), id);
    await updateDoc(audioRef, {
      validated: true,
    });
  };

  const rejectAudio = (id) => {
    const audioRef = doc(collection(db, "Audios"), id);
    updateDoc(audioRef, {
      validated: false,
    });
  };

  useQuery("audios-validator", () => {
    const q = query(collection(db, "Audios"), where("validated", "==", null));
    getDocs(q).then((querySnapshot) => {
      let audios = [];
      querySnapshot.forEach((doc) => {
        audios.push({ ...doc.data(), id: doc.id });
      });
      setAudios(audios);
    });
  });

  return (
    <Layout>
      <div className="w-1/2 h-auto grid grid-cols-2 gap-6 items-center mt-10 border-t border-t-grayish pt-4">
        {audios.map((audio, index) => {
          return (
            <div
              className="bg-gray h-14 w-full flex items-center rounded"
              key={index}
            >
              <Audio audio={audio} />
              <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-grayish">
                <MdDone
                  className="text-black text-xl cursor-pointer"
                  onClick={() => approveAudio(audios[index].id)}
                />
              </div>
              <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-grayish">
                <IoClose
                  className="text-black text-xl cursor-pointer"
                  onClick={() => rejectAudio(audios[index].id)}
                />
              </div>
            </div>
          );
        })}
        {audios?.length === 0 && (
          <p className="text-base text-grayish col-span-2 text-center mt-10">
            No unvalidated audios
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Validator;
