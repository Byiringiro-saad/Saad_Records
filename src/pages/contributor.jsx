import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

// Components
import Audio from "../components/audio";
import Layout from "../components/layout";
import Record from "../components/record";

// Firebase
import { auth, db } from "../firebase";

const Contributor = () => {
  const [user] = useAuthState(auth);
  const [audios, setAudios] = useState([]);

  const refetchAudios = useMutation(async () => {
    const q = query(
      collection(db, "Audios"),
      where("validated", "==", true),
      where("contributor", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    setAudios(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  useQuery(
    "audios-contributor",
    () => {
      const q = query(
        collection(db, "Audios"),
        where("validated", "==", true),
        where("contributor", "==", user.uid || "")
      );
      return getDocs(q);
    },
    {
      enabled: !!user?.uid,
      onSettled: () => {
        if (user.uid) {
          refetchAudios.mutate();
        }
      },
    }
  );

  return (
    <Layout>
      <div className="w-1/2 h-auto grid grid-cols-3 gap-6 items-center mt-10 border-t border-t-grayish pt-4">
        {audios.map((audio, index) => {
          return <Audio key={index} audio={audio} />;
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
