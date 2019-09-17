import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(2),
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
    registerButton: {
        marginTop: theme.spacing(2),
        width: '100%'
    }
}));

const RegisterForm = props => {
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
                    label="Email"
                    name="email"
                    variant="outlined"
                />
            </div>
            <Button
                className={classes.registerButton}
                color="secondary"
                size="large"
                type="submit"
                variant="contained"
            >
                Create with Google
            </Button>
            <Button
                className={classes.registerButton}
                color="secondary"
                size="large"
                type="submit"
                variant="contained"
            >
                Create with Facebook
            </Button>
            <Button
                className={classes.registerButton}
                color="secondary"
                size="large"
                type="submit"
                variant="contained"
            >
                Create with MSN
            </Button>
        </form>
    );
};

RegisterForm.propTypes = {
    className: PropTypes.string
};

export default RegisterForm;
