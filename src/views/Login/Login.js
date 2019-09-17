import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, Typography, Divider } from "@material-ui/core";

import LoginForm from "./LoginForm";
import SocialForm from "./SocialForm";

import backgroundLogin from "../../images/Background/login1.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${backgroundLogin})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mainHeading: {
    marginTop: theme.spacing(2)
  },
  or: {
    // color:'#fff',
  },
  card: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    opacity: 0.9
  },
  content: {
    padding: theme.spacing(4, 4, 3, 4)
  },
  divider: {
    margin: theme.spacing(3, 0)
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={styles.paperContainer}>
      <Grid container justify="center">
        <Grid item xs={12} sm={7}>
          <Card className={classes.card}>
            <Typography
              className={classes.mainHeading}
              variant="h1"
              align="center"
            >
              Sign In!
            </Typography>
            <div className={classes.content}>
              <LoginForm />
              <Divider className={classes.divider} />
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.or}
              >
                OR
              </Typography>
              <SocialForm />
              <Divider className={classes.divider} />
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
