import React from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Capstone from "./pages/Capstone";
import Dirty from "./pages/Dirty";
import Video from "./pages/Video";
import Billboard from "./pages/Billboard";
import Home from "./pages/Home";

import "./app.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Router>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/capstone" exact component={Capstone} />
          <Route path="/billboard" component={Billboard} />
          <Route path="/dirty" component={Dirty} />
          <Route path="/video" component={Video} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// ^ "exact component" forces an exact match instead of the default partial match
