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
import { useMutation, useQuery } from '@apollo/client'
import {  CREATE_EBOOK } from '../../../../Graphql/Mutation/'
import { DEPARTMENT } from '../../../../Graphql/Query'

import { IMAGEROUTE, BOOKROUTE } from '../../../../settings/url.js'
import { Preview } from '@mui/icons-material';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

export default function Sience() {
    const classes = useStyles()
    const [ open, setOpen ] = useState( false );
      const [enterence, setEnterence] = useState({
        title: '',
        imageId: 0,
        fileId: 0,
        autor: "",
        departmentId:0
    })
    const [createDepartment, { data, loading, error }] = useMutation( CREATE_EBOOK)
    const {data:{departments}, loading:departmentLoading, error:departmenterror} = useQuery(DEPARTMENT)
    // const department = useRef("")
    const imgUpload = useRef("")
    const fileUpload = useRef("")
 
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
      
        if ( enterence.title )
        {
            createDepartment({
                variables:{
                    name: enterence.title,
                    author: enterence.autor,
                    departmentId: enterence.departmentId,
                    fileId: enterence.fileId,
                    coverId:enterence.imageId
                },
            } )
            
          
        }
        else {
            alert("enter required fields")
        }
    }
    const sendImage = (e) => {
     
        if (imgUpload.current.files.length) {
            const formData = new FormData()
            formData.append('cover', imgUpload.current.files[0])
            try {
                axios({
                    method: "POST",
                    url: IMAGEROUTE,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res => {
                    setEnterence(prev=>({...prev,imageId: parseInt(res.data.cover_id)}))
                })
            }
            catch (err) {
                alert(err.message)
            }
        }
    }
       const sendFile = (e) => {
        
        if (fileUpload.current.files.length) {
            const formData = new FormData()
            formData.append('book', fileUpload.current.files[0])
            try {
                axios({
                    method: "POST",
                    url: BOOKROUTE,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res => {
                    setEnterence(prev=>({...prev,fileId: parseInt(res.data.file_id)}))
                })
            }
            catch (err) {
                alert(err.message)
            }
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
        <Typography style={{marginTop:'5rem'}} variant="h3" color='primary' gutterBottom>
            Electronic book
        </Typography>

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={data && data.createEbook&&data.createEbook.name}
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
        <div className="container science-input" >
            <div className="input-element">
                <label>Title</label>
                <input name="department" type='text' required onKeyUp={(e) => setEnterence(prev=>({...prev,title: e.target.value}))} placeholder="title" required />
            </div>
             <div className="input-element">
                <label>Author</label>
                <input name="author" type='text' required onKeyUp={(e) => setEnterence(prev=>({...prev,autor: e.target.value}))} placeholder="author" required />
            </div>
            {
                departments ? 
                    <select className="journal_names_select" onClick={ ( e ) => setEnterence( prev=>({...prev, departmentId: parseInt( e.target.value )}) ) }>
                               { departments.map((element, index)=><option value={element.id} key={index}>{element.name}</option>)}
                    </select>  :<></>
            }
             <div className="input-element">
                <label>upload cover image </label>
                <input type="file" onChange={sendImage} ref={imgUpload} accept="image/*" />
           
                <label>upload file </label>
                <input type="file" onChange={sendFile} ref={fileUpload}  />
            </div>
            <button className="science-submit" onClick={sendScience}>Submit</button>
        </div>
            
       
    </>)
}

   

