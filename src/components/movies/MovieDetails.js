import React, { Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const value = this.context.moviesList;

    if (value.length === 0) {
      return <Spinner />;
    } else {
      const { score, show } = value.find(elt => elt.show.id == id);
      let image;
      image =
        show.image === null
          ? "http://i66.tinypic.com/hunnlw.jpg"
          : show.image.medium;
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="col-md-10 offset-md-1">
            <div className="card mb-4 shadow-sm">
              <img
                src={image}
                alt="show's image"
                className="card-img-top col-md-8 offset-md-2 mt-4 mb-4"
                style={{ height: "250px" }}
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item h3">
                  <strong>Title:</strong> {show.name}
                </li>
                <li className="list-group-item h3">
                  <strong>Score:</strong> {score}
                </li>
                <li className="list-group-item h3">
                  <strong>Summary:</strong>
                  <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                </li>
              </ul>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

MovieDetails.contextType = Context;

export default MovieDetails;
