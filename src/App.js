import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import Movie from "./component/Movie";
import TV from "./component/TV";
import People from "./component/People";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/movie" component={Movie} />
            <Route path="/tv" component={TV} />
            <Route path="/people" component={People} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
