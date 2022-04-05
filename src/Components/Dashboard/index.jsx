import React from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Lists from './List'


const useStyles = makeStyles((theme) => ({
  dashboardRoot: {
    display: 'flex',
    width: '100%',
    position: 'static'
  },
  toolbar: {
    paddingRight: 24, 
  
  },
  title: {
    // position:'sticky'
  },
  appBar: {    
    minHeight:'88px',
    position: 'sticky',
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: 'center'
  },


}));

export default function Dashboard() {
  const classes = useStyles();


  return (
    <div className={classes.dashboardRoot}>
        <CssBaseline />
        <AppBar  className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
        <Lists/>
  
    </div>
  );
}