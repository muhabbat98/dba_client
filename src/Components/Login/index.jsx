import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { VisibilityOff, Visibility, Lock, Person } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Box } from '@material-ui/core';
import { useMutation } from "@apollo/client";
import { GET_TOKEN } from '../../Graphql/Mutation'
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: '0 auto',
      marginTop: '2rem',
      padding: theme.spacing(6),
    },
    
    loginText: {
      fontSize: '36px'
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '25ch',
      padding: theme.spacing(1),
    },

  },
  cover:{
    minHeight:"calc(100vh - 320px)",
  }
}));
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
export default function SimpleContainer() {
  const classes = useStyles();
  const [userInfo, { data }] = useMutation(GET_TOKEN)
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    username: '',
    isAdmin: false
  });

  useEffect(() => {

    // Save userInfo to localStorage 
    if (data && data.isUser.status === 200) {

      window.localStorage.setItem("userid", data.isUser.data.user_id)
      window.localStorage.setItem("token", data.isUser.token)
      console.log(data.isUser.data.is_admin)

      if (data.isUser.data.is_admin === true) {
        return window.location.pathname = '/dashboard'
      }
      return window.location.pathname = '/'
    }
    else if (data && data.isUser) {
      alert(data.isUser.error)
      document.location.reload()
    }
  }, [data])

  const handleChange = (prop) => (event) => {
    if (prop === "isAdmin") {
      return setValues({ ...values, [prop]: !values.isAdmin });
    }
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleClickShowPassword = () => {

    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const setUsername = (e) => {
    setValues({ ...values, username: e.target.value });
  }

  // send userInfo and get Token 

  const checkLogin = () => {

    if ( values.password.length && values.username.length )
    {
      console.log(values.username,  values.password, values.isAdmin)
      userInfo({
        variables: {
          username: values.username,
          password: values.password,
          isAdmin: values.isAdmin
        }
      })
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.cover}>
        <Container className={classes.root} maxWidth="sm">
          <Paper>
            <Typography className={classes.loginText} variant="h4" component="h2">
              <Box display="flex" alignItems="center" justifyContent="center">
                <AccountCircle fontSize="large" className="login-header-icon" color='secondary' />
                Login
              </Box>
            </Typography>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end" margin="1.4rem 0px">
                <Grid item>
                  <Person color="secondary" />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" onChange={setUsername} label="username" />
                </Grid>
              </Grid>
            </div>
            <Box display="flex" justifyContent="space-between" alignItems='center' margin="1.4rem 0px" >
              <Lock color="secondary" />
              <FormControl className={clsx(classes.margin, classes.textField)}>

                <InputLabel htmlFor="standard-adornment-password"> Password </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={values.isAdmin} onChange={handleChange('isAdmin')} />}
                label="admin"
              />
            </FormGroup>
            <StyledButton onClick={checkLogin} disabled={values.password.length && values.username.length ? false : true} className="login-button">Log In</StyledButton>
          </Paper>
        </Container>
      </div>
    </React.Fragment>
  );
}
