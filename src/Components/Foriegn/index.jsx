import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Cover from '../../assets/default-cover.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useQuery } from '@apollo/client'
import { FORIEGN_BOOKS } from '../../Graphql/Query'
import { STATIC_ROUTE } from '../../settings/url'
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));
export default function MediaControlCard() {
    const classes = useStyles();
    const { data, loading, error } = useQuery(FORIEGN_BOOKS)
    console.log(data && data.foriegnBooks)
    useEffect(() => {
        if (error) alert(error.message)
    }, [error])
    return (
        <React.Fragment>
            <CssBaseline />
            {
                loading ?
                    <Backdrop open={true} className={classes.backdrop} >
                        <CircularProgress color="inherit" />
                    </Backdrop> :
                    <></>
            }
            <div className="foriegn-body">
                <h2 className="foriegn-book-header">The foriegn department books</h2>
                <Container maxWidth="lg">
                    <Grid container>
                        {
                            data && data.foriegnBooks ?
                                data.foriegnBooks.map((element, index) => (
                                    <Grid display='flex' key={index} item md={3} className="book-card" >
                                        <div className="media">
                                            <img src={element.cover ? STATIC_ROUTE + element.cover.filename : Cover} className='foriegn-book-cover' alt="cover" />
                                            <div className="book-icons">
                                                {
                                                    element.file && element.file.filename ?
                                                        <a href={STATIC_ROUTE + element.file.filename}> <GetAppIcon /> </a> :
                                                        <></>

                                                }
                                                <a href="/"> <ShareIcon /> </a>
                                                <a href="/"> <VisibilityIcon /></a>
                                            </div>
                                        </div>
                                        <div className="book-body">
                                            <div className="about-book">
                                                <h4 className="book-name">{element.name}</h4>
                                                <h6 className="book-author">{element.author}</h6>
                                            </div>
                                            <div className="data">
                                                <div >{element.resourceType === 2 ? 'printed' : 'digital'}</div>
                                                <div>{element.data}</div>
                                            </div>
                                        </div>
                                    </Grid>)
                                )
                                :
                                <></>
                        }


                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
}
