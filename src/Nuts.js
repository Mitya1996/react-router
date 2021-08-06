import "./Nuts.css";
import nut from "./img/nut.jpg";
import { Link } from "react-router-dom";

function Nuts() {
  return (
    <div className="Nuts">
      <img src={nut}></img>
      <div className="Nuts-info">
        <div>BOFA DEEZ NUTS!</div>
        <Link to="/">GO BACK</Link>
      </div>
      <img src={nut}></img>
    </div>
  );
}

export default Nuts;
