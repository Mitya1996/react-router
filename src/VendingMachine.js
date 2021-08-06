import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AiFillInfoCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import audio from "./mp3/goteem.mp3";

import "./VendingMachine.css";

function VendingMachine() {
  const playAudio = () => {
    new Audio(audio).play();
  };
  return (
    <div className="VendingMachine">
      <div className="VendingMachine-info">
        HELLO. I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?
      </div>
      <div className="VendingMachine-options">
        <div className="linkwrapper">
          <Link to="/cookies">COOKIES</Link>
        </div>
        <div className="linkwrapper">
          <Link to="/candy">CANDY</Link>
        </div>
        <div className="linkwrapper" onClick={playAudio}>
          <Link to="/deez">BOFA</Link>
          <Link to="/deez">
            <AiFillInfoCircle
              data-tip="What's This?"
              style={{
                color: "white",
                position: "absolute",
              }}
            ></AiFillInfoCircle>
            <ReactTooltip
              place="bottom"
              style={{ textShadow: "none !important" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VendingMachine;
