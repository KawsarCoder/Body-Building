// css file link
import "./App.css";
// menu bar link
import Menubar from "./components/Menubar/Menubar";
// cart component link
import Cart from "./components/Cart/Cart";
// font awsome link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
// blog page link
import Blog from "./components/Blog/Blog";
function App() {
  return (
    <div className="App">
      {/* dynamic menu bar added */}
      <Menubar></Menubar>
      {/* cart container create  */}
      <div className="container">
        <h1 className="fs-2 mt-5 d-blog text-center">
          <FontAwesomeIcon className="text-primary me-3" icon={faDumbbell} />
          Exercise Daily, Build Body
        </h1>
        <h5 className="mt-4">Choose your Exercise</h5>
        {/* dynamic cart added  */}
        <div className="position-relative">
          <Cart></Cart>
        </div>
      </div>
      {/* blog page added  */}
      <div>
        <Blog></Blog>
      </div>
    </div>
  );
}

export default App;
