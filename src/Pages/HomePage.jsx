import { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";
import { db } from "../Firebase";
import { collection, getDoc, getDocs, query } from "firebase/firestore";

const HomePage = () => {
  const [songs, getSongs] = useState([]);

  useEffect(() => {
    async function reSongs() {
      const querySnapshot = await getDocs(collection(db, "Songs"))
      const mappedData = querySnapshot.docs.map((doc) => {
        const getId = doc.id;
        const getDocs = doc.data();
        const mergedData = { id: getId, ...getDocs }
        return mergedData
      })
      getSongs(mappedData)
    }
    reSongs();
  }, []);

  return (
    <>
      <div className="flex gap-x-2 flex-wrap gap-y-1">
        <CardComponent />
        {songs.map((data) => {
          return <h1 className="text-white">{data.enterName}</h1>;
        })}
      </div>
    </>
  );
};

export default HomePage;
