import { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";
import { db } from "../Firebase";
import { collection, getDoc, getDocs, query } from "firebase/firestore";
import TypewriterEffectDemo from "../Components/TextWriter";
import { BackgroundBoxesDemo } from "../Components/BackgroundBoxes";
import { AnimatedTooltipPreview } from "../Components/Contributors";

const HomePage = () => {
  const [songs, getSongs] = useState([]);

  useEffect(() => {
    async function reSongs() {
      const querySnapshot = await getDocs(collection(db, "Songs"));
      const mappedData = querySnapshot.docs.map((doc) => {
        const getId = doc.id;
        const getDocs = doc.data();
        const mergedData = { id: getId, ...getDocs };
        return mergedData;
      });
      getSongs(mappedData);
    }
    reSongs();
  }, []);

  return (
    <>
      <AnimatedTooltipPreview />
      <BackgroundBoxesDemo />
      <div className="flex gap-x-2 flex-wrap gap-y-1">
        {songs.map((data) => {
          return (
            <CardComponent
              name={data.enterName}
              title={data.enterTitle}
              duration={data.enterDuration}
              thumbnail={data.enterThumbnail}
              avatar={data.enterProfile}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
