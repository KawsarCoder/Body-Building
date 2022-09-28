import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="container">
        <h1 className="fs-2 mt-5 ">
          <FontAwesomeIcon className="text-warning" icon={faDumbbell} />{" "}
          Exercise Daily, Build Body
        </h1>
        <h5 className="mt-4">Choose your Exercise</h5>
      </div> 
    </div>
  );
}

export default App;
