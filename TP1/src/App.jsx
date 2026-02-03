import "./normalize.css"
import { Outlet } from "react-router-dom";
import "./style.css";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
        <Outlet /> 
        <Footer />
    </>
  );
}

export default App;
