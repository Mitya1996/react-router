import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Cookies from "./Cookies";
import Nuts from "./Nuts";
import Candy from "./Candy";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/cookies" exact>
          <Cookies />
        </Route>
        <Route path="/deez" exact>
          <Nuts />
        </Route>
        <Route path="/candy" exact>
          <Candy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
