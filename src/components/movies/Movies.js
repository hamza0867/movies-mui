import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import Movie from "./Movie";

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { moviesList, heading } = value;
          if (moviesList === undefined || moviesList.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {moviesList.map(movie => {
                    return <Movie key={movie.show.id} movie={movie} />;
                  })}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Movies;
