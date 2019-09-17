import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import facebookIcon from "../../images/logos/facebook.svg";
import googleIcon from "../../images/logos/google.svg";
import msnIcon from "../../images/logos/msn.svg";

import GoogleLogin from "react-google-login";
import MicrosoftLogin from "react-microsoft-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Axios from "axios";
import CloseIcon from "@material-ui/icons/Close";

import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2)
  },
  icons: {
    border: "none",
    background: "transparent"
  },
  icon: {
    fontSize: 46,
    color: "#fffff"
  },
  iconImage: { width: "46px" }
}));

const SocialForm = props => {
  const mRef = React.createRef();
  let [error, setError] = React.useState({});
  let [showerror, setShowError] = React.useState(false);
  const { className, ...rest } = props;
  const classes = useStyles();

  const handleSubmit = async event => {
    event.preventDefault();
  };

  const handlegooglelogin = async response => {
    let email = response.getBasicProfile().getEmail();
    let accessToken = response.accessToken;
    console.log(email, accessToken);
    Axios.post("http://localhost:3001/auth/login", {
      email,
      accessToken,
      method: "google"
    })
      .then(result => {
        if (result.data.error) {
          setError(result.data.error);
          setShowError(true);
        } else {
          console.log(props);
          props.history.push("/");
        }
      })
      .catch(err => {
        // setError(err);
        // setShowError(true);
      });
  };
  const handlefacebooklogin = async response => {
    console.log("FAcebook Login");
    let email = response.email;
    let accessToken = response.accessToken;
    Axios.post("http://localhost:3001/auth/login", {
      email,
      accessToken,
      method: "facebook"
    })
      .then(result => {
        console.log(result);
        if (result.data.error) {
          setError(result.data.error);
          setShowError(true);
        } else {
          props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handlegooglefail = async response => {
    console.log(response);
  };
  const handlefacebookfail = async response => {
    console.log(response);
  };

  const authHandler = (err, response) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log(response);
      let email = response.userPrincipalName;
      let accessToken = response.accessToken;

      Axios.post("http://localhost:3001/auth/login", {
        email,
        accessToken,
        method: "microsoft"
      })
        .then(result => {
          if (result.data.error) {
            setError(result.data.error);
            setShowError(true);
          } else {

            props.history.push("/");
            
          }
          console.log(result.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={showerror}
        autoHideDuration={6000}
        onClose={() => {
          setShowError(false);
        }}
      >
        <SnackbarContent
          aria-describedby="client-snackbar"
          style={{ backgroundColor: "red" }}
          message={
            <span
              id="client-snackbar"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Icon
                style={{
                  fontSize: 20,
                  opacity: 0.9
                }}
              />
              {error}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              // onClick={onClose}
            >
              <CloseIcon style={{ fontSize: 20 }} />
            </IconButton>
          ]}
        />
      </Snackbar>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid key={0} item>
            <GoogleLogin
              clientId="962369995822-t1v05mim1lr5caf64a5j8d5lb927g5qs.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={handlegooglelogin}
              onFailure={handlegooglefail}
              cookiePolicy={"single_host_origin"}
              render={renderProps => (
                <IconButton
                  class={classes.icons}
                  type="submit"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <Icon className={classes.icon}>
                    <img
                      className={classes.iconImage}
                      src={googleIcon}
                      alt="google"
                    />
                  </Icon>
                </IconButton>
              )}
            />
          </Grid>
          <Grid key={1} item>
            <FacebookLogin
              appId="2513053085592232"
              render={renderProps => (
                <IconButton
                  aria-label="delete"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className={classes.margin}
                >
                  <img
                    className={classes.iconImage}
                    src={facebookIcon}
                    alt="facebook"
                  />
                </IconButton>
              )}
              fields="name,email,picture"
              callback={handlefacebooklogin}
            />
          </Grid>
          <Grid key={2} item>
            <div style={{ display: "none" }}>
              <MicrosoftLogin
                clientId="1c264515-02f6-42e1-9751-3df6f6e237f3"
                graphScopes={[
                  "openid",
                  "profile",
                  "offline_access",
                  "user.read"
                ]}
                withUserData={true}
                authCallback={authHandler}
                buttonTheme={"dark"}
                ref={mRef}
              />
            </div>
            <IconButton
              aria-label="delete"
              onClick={() => {
                mRef.current.login();
              }}
              className={classes.margin}
            >
              <img className={classes.iconImage} src={msnIcon} alt="msn" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

SocialForm.propTypes = {
  className: PropTypes.string
};

export default withRouter(SocialForm);
