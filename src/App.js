import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import MovieDetails from "./components/movies/MovieDetails";
import MovieDetailsMui from "./components/movies/MovieDetailsMui";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/movie/:id" component={MovieDetailsMui} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
