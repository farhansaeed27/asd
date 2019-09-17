import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Card,
  CardContent,
  Typography,
  Divider,
} from '@material-ui/core';

import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mainHeading: {
    margin: theme.spacing(4,0)
  },
  card: {
    height: '500px',
    marginBottom: theme.spacing(4),
  },
  or: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      title="Login/Register"
    >
      <Grid
          container
          justify="center"
      >
        <Grid item xs={12} className={classes.mainHeading}>
          <Typography variant="h1" align="center"> The Real Network </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography
                  gutterBottom
                  align="center"
                  variant="h2"
              >
                Login
              </Typography>
              <LoginForm/>
              <Divider className={classes.divider} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={1} className={classes.or}>
          <Typography variant="h3" align="center"> or </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography
                  align="center"
                  variant="h2"
              >
                Create
              </Typography>
              <Typography
                  gutterBottom
                  align="center"
                  variant="h2"
              >
                Account
              </Typography>
              <RegisterForm/>
              <Divider className={classes.divider} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

// export default Login;
