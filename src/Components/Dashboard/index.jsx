import React from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Lists from './List'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  toolbar: {
    paddingRight: 24, 
  },

  appBar: {    
    minHeight:'84px',
    position: 'relative',
    left: 0,
    top:0
  },


}));

export default function Dashboard() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={classes.appBar}>
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