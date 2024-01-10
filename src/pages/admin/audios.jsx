import { useState } from "react";

// Components
import Audio from "../../components/audio";

// Icons
import { MdVerified } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";

const Audios = () => {
  const [audios, setAudios] = useState([1, 3, 4]);

  return (
    <div className="w-full h-auto grid grid-cols-3 gap-6 items-cente pt-4">
      {audios.map((record, index) => {
        return (
          <div className="flex h-14 w-auto items-center bg-gray rounded">
            <Audio key={index} />
            <div className="flex w-[15%] h-[70%] items-center justify-center">
              <MdVerified className="text-pink text-xl cursor-pointer" />
            </div>
            {/* <div className="flex w-[15%] h-[70%] items-center justify-center border-l border-l-grayish">
              <AiOutlineStop className="text-black text-xl cursor-pointer" />
            </div> */}
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
