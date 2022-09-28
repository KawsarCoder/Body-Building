import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Cart from "./components/Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import Aside from "./components/Aside/Aside";
// import Item from "./components/Item/Item";
function App() {
  // let cartItem = Cart;
  // console.log(cartItem);
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="container">
        <h1 className="fs-2 mt-5 ">
          <FontAwesomeIcon className="text-primary" icon={faDumbbell} />{" "}
          Exercise Daily, Build Body
        </h1>
        <h5 className="mt-4">Choose your Exercise</h5>
        <div className="position-relative">
          <Cart></Cart>
          <Aside></Aside>
        </div>
      </div>
    </div>
  );
}

export default App;
