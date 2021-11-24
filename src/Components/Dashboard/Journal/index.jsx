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
import { IMAGEROUTE } from '../../../settings/url.js'
import {  CREATE_JOURNAL_TYPE } from '../../../Graphql/Mutation/'
import Journal from'./journal'
import { JOURNAL_NAME } from '../../../Graphql/Query'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

export default function Sience() {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [createJournal, { data, loading, error }] = useMutation( CREATE_JOURNAL_TYPE,{
        refetchQueries:[{query:JOURNAL_NAME}]
    })

    const [enterence, setEnterence] = useState({
        title: '',
        keyword: '',
        resourceType: 1,
        imageId: null,       
        language: ''
    })
    const imgUpload = useRef()
    // const bookUpload = useRef()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    useEffect(() => {
        if (error) alert(error.message)
        else if (data) {
            setOpen(true)
            imgUpload.current.value = ''
        }
    }, [error, data])
    const sendScience = () => {
      
        if (enterence.title) {
            createJournal({
                variables:{
                    name: enterence.title,
                    coverId: enterence.imageId,
                    language:enterence.language,
                    keywords:enterence.keyword,
                    resourceType:enterence.resourceType
                },
            })
          
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
                    setEnterence({ ...enterence, imageId: res.data.cover_id })
                })
            }
            catch (err) {
                alert(err.message)
            }
        }
    }
    // const sendBook = (e) => {
        
    //     if (bookUpload.current.files.length) {
    //         const formData = new FormData()
    //         formData.append('book', bookUpload.current.files[0])
    //         try {
    //             axios({
    //                 method: "POST",
    //                 url: BOOKROUTE,
    //                 data: formData,
    //                 headers: {
    //                     "Content-Type": "multipart/form-data"
    //                 }
    //             }).then(res => {
    //                 setEnterence({ ...enterence, fileId: res.data.file_id })
    //             })
    //         }
    //         catch (err) {
    //             alert(err.message)
    //         }
    //     }
    // }
    return (<>
        {
            loading ?
                <Backdrop open={true} className={classes.backdrop} >
                    <CircularProgress color="inherit" />
                </Backdrop> :
                <></>
        }
        <Typography variant="h3" color='primary' gutterBottom>
            Create Journal General Type
        </Typography>

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={data && data.createJournalType&&data.createJournalType.name}
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
                <label>Title</label>
                <input name="title" type='text' required onKeyUp={(e) => setEnterence({ ...enterence, title: e.target.value })} placeholder="title" required />
            </div>
            <div className="input-element">
                <label>Keyword</label>
                <input name="keyword" type='text' onKeyUp={(e) => setEnterence({ ...enterence, keyword: e.target.value })} placeholder="keyword" />
            </div>
            
            <div className="input-element science-checkbox">
                <select name="resource_type" onChange={(e) => setEnterence({ ...enterence, resourceType: parseInt(e.target.value) })}>
                    <option value="1">Digital</option>
                    <option value="2">Printed</option>
                    <option value="3">Digital & Printed</option>
                </select>
            </div>

            <div className="input-element">
                <label>upload cover image </label>
                <input type="file" onChange={sendImage} ref={imgUpload} accept="image/*" />
            </div>

            <div className="input-element">
                <label>Language</label>
                <input type='text' onKeyUp={(e) => setEnterence({ ...enterence, language: e.target.value })} placeholder="language" />
            </div>
            <button className="science-submit" onClick={sendScience}>Submit</button>
        </div>

        <Journal/>
    </>)
}