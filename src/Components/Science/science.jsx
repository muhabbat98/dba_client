import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Cover from '../../assets/default-cover.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import {CircularProgress} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useQuery } from '@apollo/client'
import { SCIENCE_BOOKS } from '../../Graphql/Query'
import { STATIC_ROUTE } from '../../settings/url'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
export default function MediaControlCard({department}) {
    const classes = useStyles();
    const { data, loading, error } = useQuery(SCIENCE_BOOKS,{
        variables:{
            id:department.number
        }
    })
  
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
                {/* <h2 className="foriegn-book-header"></h2> */}
                
                <Container maxWidth="lg">
                    {/* <h3 style={{textAlign:'left', color:"var(--secondary-text-color"}} className="foriegn-book-header">PHD</h3>
                    <h3 style={{textAlign:'left', color:"var(--secondary-text-color"}} className="foriegn-book-header"></h3> */}
                    <div role="presentation" >
                        <Breadcrumbs aria-label="breadcrumb">
                            <StyledBreadcrumb
                            style={{cursor:"pointer"}}
                            component="div"
                            label="PHD"
                            icon={<LocalLibraryIcon fontSize="small" />}
                            onClick={()=>department.setState(3)}
                            />
                            <StyledBreadcrumb
                            style={{cursor:"pointer"}}
                            component="div"
                            label="Magistr"
                            icon={<AccountBalanceIcon fontSize="small" />}
                            onClick={()=>department.setState(2)}
                            />
                            <StyledBreadcrumb
                            style={{cursor:"pointer"}}
                            component="div"
                            label="Bachalor"
                            icon={<HomeIcon fontSize="small" />}
                            onClick={()=>department.setState(1)}
                            />
                           
                           
                        </Breadcrumbs>
                    </div>

                    <Grid container>
                        {
                            data && data.sciences ?
                                data.sciences.map((element, index) => (
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
