import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = props => {
  const {
    movie: { score, show }
  } = props;
  let image;
  image =
    show.image === null
      ? "http://i66.tinypic.com/hunnlw.jpg"
      : show.image.medium;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body" style={{ display: "table" }}>
          <h5
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              fontWeight: "bold"
            }}
          >
            {show.name}
          </h5>
          <img
            src={image}
            alt="show's image"
            className="float-right"
            style={{
              width: "100px",
              height: "100px"
            }}
          />
        </div>
        <div className="card-footer">
          <Link to={`/movie/${show.id}`} className="btn btn-dark btn-block">
            View Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Movie.defaultProps = {};

Movie.propTypes = {};

export default Movie;
