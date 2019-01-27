import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "150px",
    width: "48%",
    marginBottom: "20px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    height: "inherit",
    width: "150px"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

function Movie(props) {
  const { classes, theme } = props;
  const {
    movie: { score, show }
  } = props;
  let image;
  image =
    show.image === null
      ? "http://i66.tinypic.com/hunnlw.jpg"
      : show.image.medium;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {show.name}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <Link to={`/movie/${show.id}`}>
              <Typography component="p" variant="p" color="secondary">
                View Show Details
              </Typography>
            </Link>
          </Button>
        </div>
      </div>
      <CardMedia className={classes.cover} image={image} title="show's image" />
    </Card>
  );
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Movie);
