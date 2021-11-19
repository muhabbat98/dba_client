import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Cover from '../../../assets/default-cover.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useQuery } from '@apollo/client'
import { EBOOKS } from '../../../Graphql/Query';
// import { DEPARTMENT } from '../../Graphql/Query'
import { STATIC_ROUTE } from '../../../settings/url'
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));
export default function MediaControlCard({data}) {
    const classes = useStyles();
    const { data: newData, loading, error } = useQuery(EBOOKS, {
        variables: {
            id:data.id
        }
    })

    // useEffect(() => {
    //     console.log(data)
    //     if (error) alert(error.message)
    // }, [error])
    useEffect(() => {
        console.log(newData)
    },[newData])
    return (
        <React.Fragment>
            <CssBaseline />
            {/* {
                loading ?
                    <Backdrop open={true} className={classes.backdrop} >
                        <CircularProgress color="inherit" />
                    </Backdrop> :
                    <></>
            } */}
            <div className="foriegn-body">
                {/* {
                    data && data.departments.map((u) => <>
                         <h2 className="foriegn-book-header">{u.name}</h2>
                    </>)
                } */}
                <h2 className="foriegn-book-header">{ data.name}</h2>
            
                <Container maxWidth="lg">
                    <Grid container>
                        {
                            newData && newData.eBooks ?
                                newData.eBooks.map((element, index) => (
                                    <Grid item  key={index} md={3} className="book-card" >
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
