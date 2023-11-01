import { useState } from "react";
import CreatNote from "./components/CreatNote";
import Homee from "./components/Homee";
import "./app.css";
function App() {
  const [page, setPage] = useState("home");
  function handlerPage(value) {
    setPage(value);
  }
  return (
    <div className="container">
      {page === "home" && <Homee handlerPage={handlerPage} />}
      {page === "creatNote" && <CreatNote handlerPage={handlerPage} />}
    </div>
  );
}

export default App;
