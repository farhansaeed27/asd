/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {

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
  checkbox: {
    marginBottom: theme.spacing(-1),
  },
  submitButton: {
    width: '100%'
  },

}));

const LoginForm = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

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
        <FormGroup row  className={classes.checkbox}>
          <FormControlLabel
            control={
              <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="primary" />
            }
            label="Keep me signed in"
          />
        </FormGroup>
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        size="large"
        type="submit"
        variant="contained"
      >
        Sign In
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
