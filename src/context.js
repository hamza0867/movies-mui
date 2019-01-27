import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return {
        ...state,
        moviesList: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      heading: "Search for a show inside the search box",
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  componentDidMount() {
    axios
      .get("https://api.tvmaze.com/search/shows?q=test")
      .then(res => {
        // console.log(res.data);
        this.setState({
          moviesList: res.data,
          heading: "Results for shows with keyword test"
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
