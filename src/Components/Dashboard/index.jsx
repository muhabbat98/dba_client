import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Lists from './List'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, 
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    minHeight:'84px',
    position: 'fixed'
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