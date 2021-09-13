import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
import { useMutation } from '@apollo/client'
import { IMAGEROUTE, BOOKROUTE } from '../../../settings/url.js'
import { ADD_USER} from '../../../Graphql/Mutation/'
import {Visibility, VisibilityOff} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

export default function Sience() {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [visiblity, setVisibility] = useState(false)
    const [addUser, { data, loading, error }] = useMutation(ADD_USER)
    const [enterence, setEnterence] = useState({
        username: '',
        password: '',
        fullname: '',
        userType: 1,
    })
    const imgUpload = useRef()
    const bookUpload = useRef()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    useEffect(() => {
        if (error) alert(error.message)
        else if (data && data.addUser.status===200){
            setOpen(true)}
        else if(data && data.addUser.status!==200) alert(data.addUser.error)

    }, [error, data])
    const sendScience = () => {
        if (enterence.username&&enterence.password) {
            addUser({
                variables: {
                    username: enterence.username,
                    password: enterence.password,
                    fullname: enterence.fullname,
                    userType: enterence.userType,
                }
            })
        }
        else {
            alert("fill required fields")
        }
    }

    return (<>
        {
            loading ?
                <Backdrop open={true} className={classes.backdrop} >
                    <CircularProgress color="inherit" />
                </Backdrop> :
                <></>
        }
        <Typography variant="h3" color='primary' gutterBottom>
            Entering Create Science Article
        </Typography>

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={data && data.addUser.message}
            action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose}>
                        OK
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
        <div className="container science-input">
            <div className="input-element">
                <label>UserName</label>
                <input type='text' required onKeyUp={(e) => setEnterence({ ...enterence, username: e.target.value })} placeholder="username" />
            </div>
            <div className="input-element">
                <label>Full Name</label>
                <input type='text' onKeyUp={(e) => setEnterence({ ...enterence, fullname: e.target.value })} placeholder="fullname" />
            </div>

            
            <div className="input-element science-checkbox">
                <select name="degree" onChange={(e) => setEnterence({ ...enterence, userType: parseInt(e.target.value) })}>
                    <option value="1">User</option>
                    <option value="2">Admin</option>
                </select>
                
            </div>

            <div className="input-element">
                <label>password</label>
                <input type={visiblity?"text":'password'} onKeyUp={(e) => setEnterence({ ...enterence, password: e.target.value })} placeholder="password" />
                <button className="visiblity-button" onClick={()=>setVisibility(!visiblity)}>{visiblity?<VisibilityOff/>:<Visibility/>}</button> 
            </div>
            <button className="science-submit" onClick={sendScience}>Submit</button>
        </div>


    </>)
}