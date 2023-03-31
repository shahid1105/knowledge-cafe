import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cafe from "./components/Cafe/Cafe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Cafe></Cafe>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
