import { useState } from "react";

// Components
import Audio from "../components/audio";
import Layout from "../components/layout";

// Icons
import { MdDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Validator = () => {
  const [audios, setAudios] = useState([1, 2, 3]);

  const approveAudio = () => {};

  const rejectAudio = () => {};

  return (
    <Layout>
      <div className="w-1/2 h-auto grid grid-cols-2 gap-6 items-center mt-10 border-t border-t-grayish pt-4">
        {audios.map((record, index) => {
          return (
            <div className="bg-gray h-14 w-full flex items-center rounded">
              <Audio key={index} />
              <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-grayish">
                <MdDone
                  className="text-black text-xl cursor-pointer"
                  onClick={approveAudio}
                />
              </div>
              <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-grayish">
                <IoClose
                  className="text-black text-xl cursor-pointer"
                  onClick={rejectAudio}
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
