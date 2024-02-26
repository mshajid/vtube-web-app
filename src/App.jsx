import CardComponent from "./Components/CardComponent";
import MainForm from "./Components/MainForm";
import Navbar from "./Components/Navbar";
import { db } from "./Firebase";

const App = () => {
  return (
    <>
      <Navbar />
      <MainForm />
      <CardComponent />
    </>
  );
};

export default App;
