import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useMutation } from '@apollo/client'
import {  ADD_DEPARTMENT } from '../../../Graphql/Mutation/'
import { DEPARTMENT } from '../../../Graphql/Query'
import Ebook from './Ebook'
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

export default function Sience() {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [ createDepartment, { data, loading, error } ] = useMutation( ADD_DEPARTMENT, {
        refetchQueries:["Departments", DEPARTMENT]
    })

    const department = useRef("")

 
    useEffect(() => {
        if (error) alert(error.message)
        else if (data) {
            setOpen(true)
        }
    }, [error, data])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    
    const sendScience = () => {
      
        if (department.current.value) {
            createDepartment({
                variables:{
                    name: department.current.value
                },
            })
          
        }
        else {
            alert("enter required fields")
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
            Create Department
        </Typography>

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={data && data.createDepartment&&data.createDepartment.name}
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
                <label>Department name</label>
                <input name="department" type='text' required ref={department} placeholder="title" required />
            </div>
            
            <button className="science-submit" onClick={sendScience}>Submit</button>
        </div>

       <Ebook/>
    </>)
}

   

