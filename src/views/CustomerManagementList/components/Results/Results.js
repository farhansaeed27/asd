import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@material-ui/core';

import { GenericMoreButton, TableEditBar } from 'components';
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0
    },
    inner: {
        minWidth: 700
    },
    nameCell: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: 42,
        width: 42,
        marginRight: theme.spacing(1)
    },
    actions: {
        padding: theme.spacing(1),
        justifyContent: 'flex-end'
    },
    menuRight: {
        listStyle: 'none',
        position: 'fixed',
    },
    listItem: {
        border: '1px',
    },

}));

const Results = props => {
    const { className, customers, ...rest } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const classes = useStyles();

    const [selectedCustomers, setSelectedCustomers] = useState([]);
    const [selectedCustomersPending] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rowsPerPagePending, setRowsPerPagePending] = useState(5);
    const [rowsPerPageUnassigned, setRowsPerPageUnassigned] = useState(5);

    const handleSelectAll = event => {
        const selectedCustomers = event.target.checked
            ? customers.map(customer => customer.id)
    : [];

        setSelectedCustomers(selectedCustomers);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomers.indexOf(id);
        let newSelectedCustomers = [];

        if (selectedIndex === -1) {
            newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers, id);
        } else if (selectedIndex === 0) {
            newSelectedCustomers = newSelectedCustomers.concat(
                selectedCustomers.slice(1)
            );
        } else if (selectedIndex === selectedCustomers.length - 1) {
            newSelectedCustomers = newSelectedCustomers.concat(
                selectedCustomers.slice(0, -1)
            );
        } else if (selectedIndex > 0) {
            newSelectedCustomers = newSelectedCustomers.concat(
                selectedCustomers.slice(0, selectedIndex),
                selectedCustomers.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomers(newSelectedCustomers);
    };

    const handleChangePage = (event, page) => {
        setPage(page);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
    };

    const handleChangeRowsPerPagePending = event => {
        setRowsPerPagePending(event.target.value);
    };

    const handleChangeRowsPerPageUnassigned = event => {
        setRowsPerPageUnassigned(event.target.value);
    };

    const showPendingMenu = event => {
        event.preventDefault();
        // document.getElementById("menuPending").style.top = `${event.clientY - 20}px`;
        // document.getElementById("menuPending").style.left = `${event.clientX - 20}px`;
        // document.getElementById("menuPending").style.display = "inline";
        setAnchorEl(event.currentTarget);

    };

    const hidePendingMenu = event => {
        event.preventDefault();
        setAnchorEl(null);
        // document.getElementById("menuPending").style.display = "none";
    };

    const resendInvite = event => {
        event.preventDefault();
        console.log('resend invite');
    };
    const rescindInvite = event => {
        event.preventDefault();
        console.log('rescind invite');
    };



    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
        <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
                >
                {customers.length} Records found. Page {page + 1} of{' '}
            {Math.ceil(customers.length / rowsPerPage)}
        </Typography>

        <Card>
            <CardHeader
                action={<GenericMoreButton />}
                title="All customers"
            />
            <Divider />
            <CardContent className={classes.content}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        {/*<Checkbox*/}
                                        {/*  checked={selectedCustomers.length === customers.length}*/}
                                        {/*  color="primary"*/}
                                        {/*  indeterminate={*/}
                                        {/*    selectedCustomers.length > 0 &&*/}
                                        {/*    selectedCustomers.length < customers.length*/}
                                        {/*  }*/}
                                        {/*  onChange={handleSelectAll}*/}
                                        {/*/>*/}
                                    </TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Primary Role</TableCell>
                                    <TableCell>User Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {customers.slice(0, rowsPerPage).map(customer => (
                              <TableRow
                                hover
                                key={customer.id}
                                selected={selectedCustomers.indexOf(customer.id) !== -1}
                               >

                                <TableCell padding="checkbox">
                                    <Checkbox
                                    checked={
                                        selectedCustomers.indexOf(customer.id) !== -1
                                    }
                                    color="primary"
                                    onChange={event =>
                                    handleSelectOne(event, customer.id)
                                    }
                                    value={selectedCustomers.indexOf(customer.id) !== -1}
                                />
                                </TableCell>
                                <TableCell>
                                    <div className={classes.nameCell}>
                                        <div>
                                            <Link
                                                color="inherit"
                                                component={RouterLink}
                                                to="/management/customers/1"
                                                variant="h6"
                                            >
                                                {customer.name}
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>{customer.type}</TableCell>
                                <TableCell>{customer.projects}</TableCell>
                                </TableRow>
                        ))}
                            </TableBody>
                        </Table>
                    </div>
                </PerfectScrollbar>
            </CardContent>
            <CardActions className={classes.actions}>
                <TablePagination
                    component="div"
                    count={customers.length}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </CardActions>
        </Card>
        <TableEditBar selected={selectedCustomers} />

    <br/><br/>

        <Card>
            <CardHeader
              action={<GenericMoreButton />}
              title="Pending"
            />
            <Divider />
            <CardContent className={classes.content}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.slice(0, rowsPerPagePending).map(customer => (
                                  <TableRow
                                    hover
                                    key={customer.id}
                                    selected={selectedCustomersPending.indexOf(customer.id) !== -1}
                                    onContextMenu={showPendingMenu}
                                    // onMouseLeave={hidePendingMenu}
                                  >

                                      <TableCell>
                                          <div className={classes.nameCell}>
                                              <div>
                                                  <Link
                                                    color="inherit"
                                                    component={RouterLink}
                                                    to="/management/customers/1"
                                                    variant="h6"
                                                  >
                                                      {customer.name}
                                                  </Link>
                                              </div>
                                          </div>
                                      </TableCell>
                                      <TableCell>{customer.email}</TableCell>

                                  </TableRow>
                                ))}
                            </TableBody>
                            <Menu
                              id="simple-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={Boolean(anchorEl)}
                              onClose={hidePendingMenu}
                            >
                                <MenuItem onClick={resendInvite}>Resend Invite</MenuItem>
                                <MenuItem onClick={rescindInvite}>Rescind Invite</MenuItem>
                            </Menu>
                        </Table>
                    </div>
                </PerfectScrollbar>
            </CardContent>
            <CardActions className={classes.actions}>
                <TablePagination
                  component="div"
                  count={customers.length}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPagePending}
                  page={page}
                  rowsPerPage={rowsPerPagePending}
                  rowsPerPageOptions={[5, 10, 25]}
                />
            </CardActions>
        </Card>
        <TableEditBar selected={selectedCustomersPending} />

            {/*<Box id="menuPending" className={classes.menuRight} display="none" component="span">*/}
            {/*    <List component="nav" aria-label="main mailbox folders">*/}
            {/*        <ListItem*/}
            {/*          className={classes.listItem}*/}
            {/*          button*/}
            {/*          onClick={event => resendInvite(event, 0)}*/}
            {/*        >*/}
            {/*            Resend Invite*/}
            {/*        </ListItem>*/}
            {/*        <ListItem*/}
            {/*          button*/}
            {/*          onClick={event => rescindInvite(event, 0)}*/}
            {/*        >*/}
            {/*            Rescind Invite*/}
            {/*        </ListItem>*/}
            {/*    </List>*/}
            {/*</Box>*/}

            <br/><br/>

            <Card>
                <CardHeader
                  action={<GenericMoreButton />}
                  title="Unassigned"
                />
                <Divider />
                <CardContent className={classes.content}>
                    <PerfectScrollbar>
                        <div className={classes.inner}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {customers.slice(0, rowsPerPageUnassigned).map(customer => (
                                      <TableRow
                                        hover
                                        key={customer.id}
                                        selected={selectedCustomersPending.indexOf(customer.id) !== -1}
                                      >

                                          <TableCell>
                                              <div className={classes.nameCell}>
                                                  <div>
                                                      <Link
                                                        color="inherit"
                                                        component={RouterLink}
                                                        to="/management/customers/1"
                                                        variant="h6"
                                                      >
                                                          {customer.name}
                                                      </Link>
                                                  </div>
                                              </div>
                                          </TableCell>
                                          <TableCell>{customer.email}</TableCell>
                                      </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </PerfectScrollbar>
                </CardContent>
                <CardActions className={classes.actions}>
                    <TablePagination
                      component="div"
                      count={customers.length}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPageUnassigned}
                      page={page}
                      rowsPerPage={rowsPerPageUnassigned}
                      rowsPerPageOptions={[5, 10, 25]}
                    />
                </CardActions>
            </Card>
            <TableEditBar selected={selectedCustomersPending} />

        </div>
);
};

Results.propTypes = {
    className: PropTypes.string,
    customers: PropTypes.array.isRequired
};

Results.defaultProps = {
    customers: []
};

export default Results;
