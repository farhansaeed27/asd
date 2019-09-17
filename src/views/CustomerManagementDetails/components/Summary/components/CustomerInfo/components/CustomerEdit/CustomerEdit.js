import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  Switch,
  Button,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const CustomerEdit = props => {
  const { open, onClose, customer, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...customer
  });

  if (!open) {
    return null;
  }

  const handleFieldChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
          event.target.type === 'checkbox'
              ? event.target.checked
              : event.target.value
    }));
  };

  return (
      <Modal
        onClose={onClose}
        open={open}
      >
        <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
          <form>
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h3"
              >
                  Edit Customer
              </Typography>
              <Grid
                className={classes.container}
                container
                spacing={3}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    onChange={handleFieldChange}
                    value={formState.name}
                    variant="outlined"
                  />
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Username"
                    name="name"
                    onChange={handleFieldChange}
                    value={formState.name}
                    variant="outlined"
                  />
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Email address"
                    name="email"
                    onChange={handleFieldChange}
                    value={formState.email}
                    variant="outlined"
                  />
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Primary Group"
                    name="group"
                    onChange={handleFieldChange}
                    value={formState.address1}
                    variant="outlined"
                  />
                </Grid>

              </Grid>
            </CardContent>

            <CardActions className={classes.actions}>
              <Button
                onClick={onClose}
                variant="contained"
              >
                Close
              </Button>

              <Button
                className={classes.saveButton}
                onClick={onClose}
                variant="contained"
              >
                Save
              </Button>
            </CardActions>
          </form>
        </Card>
      </Modal>
);
};

CustomerEdit.displayName = 'CustomerEdit';

CustomerEdit.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CustomerEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default CustomerEdit;
