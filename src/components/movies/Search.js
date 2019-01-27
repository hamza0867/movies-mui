import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { movieTitle: "" };
    this.onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    this.findMovies = (dispatch, e) => {
      e.preventDefault();
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${this.state.movieTitle}`)
        .then(res => {
          dispatch({
            type: "SEARCH_MOVIES",
            payload: res.data
          });
        })
        .catch(err => console.error(err));
    };
  }

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-film" /> Search for a movie
              </h1>
              <form onSubmit={this.findMovies.bind(this, value.dispatch)}>
                <div className="form-group mb-4">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Movie title ..."
                    name="movieTitle"
                    value={this.state.movieTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-2"
                  type="submit"
                >
                  Find Movies
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
