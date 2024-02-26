import CardComponent from "./Components/CardComponent";
import MainForm from "./Components/MainForm";
import Navbar from "./Components/Navbar";
import { db } from "./Firebase";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-x-2 flex-wrap gap-y-1">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </>
  );
};

export default App;
