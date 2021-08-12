import { Container, Grid } from "@material-ui/core"
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import { useMutation } from '@apollo/client'

import { BOOKROUTE, IMAGEROUTE } from '../../../settings/url'
import { CREATE_FORIEGN_BOOK } from '../../../Graphql/Mutation'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(5),
        marginLeft: 'auto'
    },
    textArea: {
        margin: '1rem 0px'
    },
    file_input: {
        border: '1px solid grey',
        borderRadius: '16px',
        margin: '1rem 0px',
        marginRight: '1rem',
        padding: '1rem',
        cursor: 'pointer'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    upload_text: {
        display: 'inline-block'
    }
}));

const Foriegn = () => {
    const classes = useStyles();
    const [state, setState] = useState(1);
    const [inputData, setData] = useState({ title: '', author: '', keyword: '', description: '', type: 1, fileId: null, imageId: null, language: '', ower: '', date: '' })

    const { acceptedFiles: imageFiles, getRootProps: imgRootProps, getInputProps: imgInputProps } = useDropzone({ accept: 'image/*' })
    const { acceptedFiles: bookFiles, getRootProps: bookRootProps, getInputProps: bookInputProps } = useDropzone()

    const [checked, setChecked] = React.useState({ book: false, bookButton: true, });
    const [checkImage, setImage] = React.useState({ image: false, imageButton: true });


    const [sendFunction, { data, loading, error }] = useMutation(CREATE_FORIEGN_BOOK)

    const [open, setOpen] = React.useState(false);



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const sendImage = (e) => {
        if (imageFiles.length) {
           
            let formData = new FormData();
            formData.append('cover', imageFiles[0])
            try {
                axios({
                    method: 'post',
                    url: IMAGEROUTE,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then((res) => {
                    if (res.status === 200) {
                        setImage({ ...checkImage, image: true })
                        setData({ ...inputData, imageId: res.data.cover_id })

                        if (e.target.tagName === 'BUTTON') e.target.style.display = 'none'
                        else e.target.parentNode.style.display = 'none'
                    }
                })
            }
            catch (err) {
                console.log(err)
            }
        }
    }
    const sendBook = (e) => {
        if (bookFiles.length) {

            let formData = new FormData();
            formData.append('book', bookFiles[0])

            try {
                axios({
                    method: 'POST',
                    url: BOOKROUTE,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then((res) => {
                    if (res.status === 200) {
                        setChecked({ ...checked, book: true })
                        setData({ ...inputData, fileId: res.data.file_id })
                        if (e.target.tagName === 'BUTTON') e.target.style.display = 'none'
                        else e.target.parentNode.style.display = 'none'
                    }
                })
            }
            catch (err) {
                alert(err.message)
            }
        }
    }

    useEffect(() => {
        if (bookFiles.length) {
            setChecked({ ...checked, bookButton: false })

        }
        if (imageFiles.length) {
            setImage({ ...checkImage, imageButton: false })

        }

        if (state !== inputData.type) setData({ ...inputData, type: state })
        if (data && data.createForiegnBook.status === 200) setOpen(true)
        else if (data && data.createForiegnBook.status === 404) alert("smth get wrong")
        if (error) alert(error.message)

    }, [bookFiles, imageFiles, state, data, error])

    const sendData = () => {
        if (inputData.title.length) {
            sendFunction({
                variables: {
                    name: inputData.title,
                    fileId: inputData.fileId,
                    coverId: inputData.imageId,
                    author: inputData.author,
                    keywords: inputData.keyword,
                    description: inputData.description,
                    resourceType: inputData.type,
                    language: inputData.language,
                    resourseHolder: inputData.ower,
                    date: inputData.date
                }
            })
        }
        else {
            alert("you must fill required fields")
        }

    }


    return (
        <Container>
            {
                loading ?
                    <Backdrop open={true} className={classes.backdrop} >
                        <CircularProgress color="inherit" />
                    </Backdrop> :
                    <></>
            }
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={data && data.createForiegnBook.data}
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

            <Typography variant="h3" color='primary' gutterBottom>
                Entering Foriegn Books
            </Typography>
            <Grid container >
                <Grid item lg={4}>
                    <TextField id="outlined-basic" onKeyUp={e => setData({ ...inputData, title: e.target.value })} label="Book Title" variant="outlined" required />
                </Grid>
                <Grid item lg={4}>
                    <TextField id="outlined-basic" onKeyUp={e => setData({ ...inputData, author: e.target.value })} label="Author of Book" variant="outlined" required />
                </Grid>
                <Grid item lg={4}>
                    <TextField id="outlined-basic" onKeyUp={e => setData({ ...inputData, keyword: e.target.value })} label="Keyword" variant="outlined" required />
                </Grid>
                <Grid className={classes.textArea} item lg={12}>
                    <TextField
                        id="outlined-full-width"
                        label="Description"
                        style={{ margin: 8 }}
                        onKeyDown={e => setData({ ...inputData, description: e.target.value })}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid container>
                    <FormControl required component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Type of Recource</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={state === 1} onChange={() => setState(1)} name="digital" />}
                                label="Digital Recourse"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state === 2} onChange={() => setState(2)} name="phisical" />}
                                label="Phisical Recourse"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state === 3} onChange={() => setState(3)} name="digitalPhisical" />}
                                label="Digital & Phisical Recourse"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Grid item className={classes.file_item} lg={6} xs={6}>
                        <div className={classes.file_input} {...imgRootProps()}>
                            <input name='cover' {...imgInputProps()} />
                            <p className={classes.upload_text}>Drop your cover image</p>
                            <Checkbox
                                checked={checkImage.image}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </div>
                        <Button variant="contained"
                            color="secondary"
                            onClick={sendImage}
                            className={classes.button}
                            disabled={checkImage.imageButton}
                            startIcon={<CloudUploadIcon />}>
                            Upload Image
                        </Button>
                    </Grid>
                    <Grid display="flex" className={classes.file_item} item lg={6} xs={6}>
                        <div className={classes.file_input} {...bookRootProps()}>
                            <input name="book" {...bookInputProps()} />
                            <p className={classes.upload_text}>Drop your full text </p>
                            <Checkbox
                                checked={checked.book}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </div>
                        <Button variant="contained"
                            color="secondary"
                            onClick={sendBook}
                            className={classes.button}
                            disabled={checked.bookButton}
                            startIcon={<CloudUploadIcon />}>
                            Upload File
                        </Button>
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <TextField id="outlined-basic" onKeyDown={e => setData({ ...inputData, language: e.target.value })} label="Language" variant="outlined" required />
                </Grid>
                <Grid item lg={4}>
                    <TextField id="outlined-basic" onKeyDown={e => setData({ ...inputData, owner: e.target.value })} label="Right Holders" variant="outlined" required />
                </Grid>
                <Grid item lg={4}>
                    <TextField id="outlined-basic" onChange={e => { setData({ ...inputData, date: e.target.value }) }} label="Data" type="date" variant="outlined" InputLabelProps={{ shrink: true, }} required />
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={sendData}
                >
                    Save
                </Button>
            </Grid>
        </Container>
    )
}

export default Foriegn