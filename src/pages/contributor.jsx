import { useState } from "react";

// Components
import Layout from "../components/layout";
import Audio from "../components/audio";
import Record from "../components/record";

const Contributor = () => {
  const [audios, setAudios] = useState([]);

  return (
    <Layout>
      <div className="w-1/2 h-auto grid grid-cols-3 gap-6 items-center mt-10 border-t border-t-grayish pt-4">
        {audios.map((record, index) => {
          return <Audio key={index} />;
        })}
        {audios?.length === 0 && (
          <p className="text-base text-grayish col-start-2 text-center mt-10">
            No validated audios
          </p>
        )}
      </div>
      <Record />
    </Layout>
  );
};

export default Contributor;
