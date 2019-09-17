/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2)
  },
  fields: {
    margin: theme.spacing(-1),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const LoginForm = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <form
      {...rest}
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Email address"
          name="email"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
        />
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        size="large"
        type="submit"
        variant="contained"
      >
        Login with Google
      </Button>
      <Button
          className={classes.submitButton}
          color="secondary"
          size="large"
          type="submit"
          variant="contained"
      >
        Login with Facebook
      </Button>
      <Button
          className={classes.submitButton}
          color="secondary"
          size="large"
          type="submit"
          variant="contained"
      >
        Login with MSN
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
