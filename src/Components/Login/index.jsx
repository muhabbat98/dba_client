import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles, withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { VisibilityOff, Visibility, Lock, Person, AccountCircle } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/material';
import { useMutation } from "@apollo/client";
import { GET_TOKEN } from '../../Graphql/Mutation'
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
  sampleRoot: {
    padding: 32,

  },
  cover:{
    marginTop: 32,
    marginBottom: 32,
    minHeight: '80vh'
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
  
      <div className={classes.cover}>
      <Container  maxWidth='sm'>
          <Paper className={ classes.sampleRoot}>
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
                <FormControl className={ clsx( classes.margin, classes.textField ) }>
                  <InputLabel htmlFor="username-input"> Username </InputLabel>
                  <Input id="username-input" type='text' onChange={setUsername} />
                </FormControl>
                
                  {/* <TextField id="input-with-icon-grid" onChange={setUsername} label="username" /> */}
                </Grid>
              </Grid>
            </div>
            <Box display="flex" alignItems='center' margin="1.4rem 0px" >
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
  );
}
