import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";

const styles = {
  card: {
    width: "80%",
    height: "auto",
    marginBottom: "20px"
  },
  media: {
    maxWidth: "100%",
    height: "26rem"
  }
};

function MovieDetailsMui(props) {
  const { classes } = props;
  return (
    <Consumer>
      {value => {
        const { moviesList } = value;
        if (moviesList === undefined || moviesList.length === 0) {
          return <Spinner />;
        }
        console.log(value);
        const {
          match: {
            params: { id }
          }
        } = props;
        const { score, show } = value.moviesList.find(elt => elt.show.id == id);
        let image;
        image =
          show.image === null
            ? "http://i66.tinypic.com/hunnlw.jpg"
            : show.image.medium;
        return (
          <React.Fragment>
            {" "}
            <Link to="/" className="btn btn-dark btn-sm mb-4">
              Go Back
            </Link>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="show's image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    <strong>Title:</strong> {show.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="secondary"
                  >
                    <strong>Score:</strong> {score}
                  </Typography>

                  <Typography variant="h5" component="p">
                    <strong>Summary:</strong>
                    <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

MovieDetailsMui.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieDetailsMui);
