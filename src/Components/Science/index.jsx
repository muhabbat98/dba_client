import React, { useEffect, useState } from 'react';
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
import { SCIENCE_BOOKS } from '../../Graphql/Query'
import { STATIC_ROUTE } from '../../settings/url'
import{ Card,CardContent,CardMedia,Typography } from '@material-ui/core';
import Phd from '../../assets/phd.jpg'
import Bachelor from '../../assets/bachelor.jpg'
import Magister from '../../assets/magister.png'
import BookComponents from './science'
import { Button, CardActionArea, CardActions } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    smallBox:{
        paddingRight: '16px'
    }

}));
export default function MediaControlCard() {
    const classes = useStyles();
    // const { data, loading, error } = useQuery(SCIENCE_BOOKS)
    const [state, setState] = useState(0)
    // useEffect(() => {
    //     if (error) alert(error.message)
    // }, [error])
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
            <h2 className="foriegn-book-header">The Scientific researches</h2>
                
                <Container maxWidth="lg">
     
                    {
                        state!==0?<BookComponents department={{number:state, setState, state}} />:
                        <Grid container>
                            <Grid className={classes.smallBox} xs={4} item>
                                <Card sx={{ maxWidth: 345}} onClick={()=>setState(3)} >
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height="200"
                                        image={Phd}
                                        alt="phd image"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Phd
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                
                                </Card>
                            </Grid>
                            <Grid className={classes.smallBox} xs={4} item>
                                <Card sx={{ maxWidth: 345 }} onClick={()=>setState(2)}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height="200"
                                        image={Magister}
                                        alt="phd image"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Magister
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                
                                </Card>
                            </Grid>
                            <Grid className={classes.smallBox} xs={4} item>
                                <Card sx={{ maxWidth: 345 }} onClick={()=>setState(1)}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height="200"
                                        image={Bachelor}
                                        alt="phd image"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Bachalor
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                
                                </Card>
                            </Grid>
                        </Grid>
                    }
                </Container>
            </div>
        </React.Fragment>
    );
}
