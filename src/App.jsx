import { Outlet } from "react-router-dom";
import CardComponent from "./Components/CardComponent";
import MainForm from "./Components/MainForm";
import Navbar from "./Components/Navbar";
import { db } from "./Firebase";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
