import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <div className="VendingMachine-info">
        HELLO. I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?
      </div>
      <div className="VendingMachine-options">
        <Router>
          <div className="linkwrapper">
            <Link to="/cookies">COOKIES</Link>
          </div>
          <div className="linkwrapper">
            <Link to="/candy">CANDY</Link>
          </div>
          <div className="linkwrapper">
            <Link to="/deez">BOFA</Link>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default VendingMachine;
