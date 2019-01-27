import React from "react";
import PropTypes from "prop-types";
import Movies from "../movies/Movies";
import Search from "../movies/Search";

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Movies />
    </React.Fragment>
  );
};

Index.defaultProps = {};

Index.propTypes = {};

export default Index;
