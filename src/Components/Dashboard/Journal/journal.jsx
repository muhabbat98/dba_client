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
import { IMAGEROUTE, BOOKROUTE } from '../../../settings/url.js'
import { CREATE_JOURNAL } from '../../../Graphql/Mutation/'
import { JOURNAL_NAME } from '../../../Graphql/Query'




const useStyles = makeStyles((theme) => ({
    journal_top:{
        marginTop:'3rem',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

export default function Sience() {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const {data:journalNames, loading:journalWaiting, error:journalError} = useQuery(JOURNAL_NAME)
    const [createJournal, { data, loading, error }] = useMutation( CREATE_JOURNAL)

    const [enterence, setEnterence] = useState({
        title: '',
        keyword: '',
        resourceType: 1,
        imageId: '',
        fileId: '',
        language: '',
        date: '',
        serialNumber:1,
        year:1,
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
                    serialNumber: enterence.serialNumber,
                    year:enterence.year,
                    fileId:enterence.fileId,
                    coverId: enterence.imageId,
                    language:enterence.language,
                    keywords:enterence.keyword,
                    resourceType:enterence.resourceType,
                    date:enterence.date
                },
                refetchQueries: ["journal"],
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
    const sendBook = (e) => {
        
        if (bookUpload.current.files.length) {
            const formData = new FormData()
            formData.append('book', bookUpload.current.files[0])
            try {
                axios({
                    method: "POST",
                    url: BOOKROUTE,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res => {
                    setEnterence({ ...enterence, fileId: res.data.file_id })
                })
            }
            catch (err) {
                alert(err.message)
            }
        }
    }
    console.log(journalNames)
    return (<>
        {
            loading ?
                <Backdrop open={true} className={classes.backdrop} >
                    <CircularProgress color="inherit" />
                </Backdrop> :
                <></>
        }
        <Typography className={classes.journal_top} variant="h3" color='primary' gutterBottom>
           Create Journal 
        </Typography>

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={data && data.createJournalType&&data.createJournalType.message}
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
                <label>JOURNAL NAME</label>
                    {
                        journalNames&&journalNames.journals ?
                            <select className="journal_names_select">
                               { journalNames.journals.map((element, index)=><option key={index}>{element.name}</option>)}
                            </select>:
                            <></>
                    }
                   

            </div>
            <div className="input-element">
                <label>Serial Number</label>
                <input type='number' onKeyUp={(e) => setEnterence({ ...enterence, serialNumber: parseInt(e.target.value) })} placeholder="serial Number" required />
            </div>
            <div className="input-element">
                <label>Year</label>
                <input type='number' onKeyUp={(e) => setEnterence({ ...enterence, year: parseInt(e.target.value) })} placeholder="year" required />
            </div>          
            <div className="input-element">
                <label>upload full text </label>
                <input type="file" onChange={sendBook} ref={bookUpload} />
            </div>

            <div className="input-element">
                <label>date</label>
                <input type='date' onKeyUp={(e) => setEnterence({ ...enterence, date: e.target.value })} placeholder="date" />
            </div>
            <button className="science-submit" onClick={sendScience}>Submit</button>
        </div>


    </>)
}