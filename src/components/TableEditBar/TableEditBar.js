import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Grid, Typography, Button, Hidden } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { CustomerEdit } from '../../views/CustomerManagementDetails/components/Summary/components/CustomerInfo/components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TableEditBar = props => {
  const {
    selected,
    customer,
    className,
    onDelete,
    ...rest
  } = props;

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };


  const classes = useStyles();
  const open = selected.length > 0;

  if(selected.length > 1){
    return (
      <Drawer
        anchor="bottom"
        open={open}
        // eslint-disable-next-line react/jsx-sort-props
        PaperProps={{ elevation: 1 }}
        variant="persistent"
      >
        <div
          {...rest}
          className={clsx(classes.root, className)}
        >
          <Grid
            alignItems="center"
            container
            spacing={2}
          >
            <Hidden smDown>
              <Grid
                item
                md={3}
              >
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                >
                  {selected.length} selected
                </Typography>
              </Grid>
            </Hidden>
            <Grid
              item
              md={6}
              xs={12}
            >
              <div className={classes.actions}>
                <Button onClick={onDelete}>
                  <DeleteIcon className={classes.buttonIcon} />
                  Delete
                </Button>
              </div>
              <CustomerEdit
                customer={customer}
                onClose={handleEditClose}
                open={openEdit}
              />
            </Grid>
          </Grid>
        </div>
      </Drawer>
    );
  }
  else{
    return (
      <Drawer
        anchor="bottom"
        open={open}
        // eslint-disable-next-line react/jsx-sort-props
        PaperProps={{ elevation: 1 }}
        variant="persistent"
      >
        <div
          {...rest}
          className={clsx(classes.root, className)}
        >
          <Grid
            alignItems="center"
            container
            spacing={2}
          >
            <Hidden smDown>
              <Grid
                item
                md={3}
              >
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                >
                  {selected.length} selected
                </Typography>
              </Grid>
            </Hidden>
            <Grid
              item
              md={6}
              xs={12}
            >
              <div className={classes.actions}>
                <Button onClick={handleEditOpen}>
                  <EditIcon className={classes.buttonIcon} />
                  Edit
                </Button>
                <Button onClick={onDelete}>
                  <DeleteIcon className={classes.buttonIcon} />
                  Delete
                </Button>
              </div>
              <CustomerEdit
                customer={customer}
                onClose={handleEditClose}
                open={openEdit}
              />
            </Grid>
          </Grid>
        </div>
      </Drawer>
    );
  }

};

TableEditBar.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
  onMarkUnpaid: PropTypes.func,
  selected: PropTypes.array.isRequired
};

export default TableEditBar;
