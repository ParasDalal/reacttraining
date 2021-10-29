import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import SampleUseState from "../pages/SampleUseState";
import SampleUseEffect from "../pages/SampleUseEffect";
import SampleUseContext from "../pages/SampleUseContext";
import SampleUseRef from "../pages/SampleUseRef";
import SampleUseReducer from "../pages/SampleUseReducer";

export default function Menu() {
  return (
    <div className="topnav">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/SampleUseState">useState</Link>
          <Link to="/SampleUseEffect">useEffect</Link>
          <Link to="/SampleUseRef">useRef</Link>
          <Link to="/SampleUseContext">useContext</Link>
          <Link to="/SampleUseReducer">useReducer</Link>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="content">
        <Switch>
          <Route path="/SampleUseState" component={SampleUseState}></Route>
          <Route path="/SampleUseEffect" component={SampleUseEffect}></Route>
          <Route path="/SampleUseRef" component={SampleUseRef}></Route>
          <Route path="/SampleUseContext" component={SampleUseContext}></Route>
          <Route path="/SampleUseReducer" component={SampleUseReducer}></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
