import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import { useQuery } from '@apollo/client'
import Cover from '../../assets/magazine_cover.jpg'
import {JOURNALS } from '../../Graphql/Query'
import { STATIC_ROUTE } from '../../settings/url'
import Journal from './journal'
import Chip from '@material-ui/core/Chip'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop:'2rem',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  journal_cover:{
      width:'inherit',
      height:'inherit',
      objectFit:'cover'

  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(1);
  const { data, loading, error } = useQuery(JOURNALS)


  return (<>
        {
            loading ?
                <Backdrop open={true} className={classes.backdrop} >
                    <CircularProgress color="inherit" />
                </Backdrop> :
                <></>
        }
    <div className="container">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Journals list
                </ListSubheader>
            }
          className={classes.root}
        >
    
        
            {
                data&&data.journals ? 
                    data.journals.map((element, index)=>(
                        <div key={index}>
                            <ListItem button onClick={()=>setOpen(open===element.id? 0:element.id)}>
                                <ListItemIcon>
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={element.cover ? STATIC_ROUTE + element.cover.filename : Cover} className={classes.journal_cover} alt="cover" />                                    
                                </Avatar>
                                </ListItemIcon>
                                <ListItemText primary={element.name} />
                                {
                                    element.language ?
                                    <Chip
                                      avatar={<Avatar>L</Avatar>}
                                      label={element.language}
                                      color="primary"
                                      variant="outlined"
                                    />:
                                    <></>
                                }
                                {open===element.id ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open===element.id} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <Journal journalId={element.id}/>
                                        {/* <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="hellos" /> */}
                                    </ListItem>
                                </List>
                            </Collapse>
                        </div>
                    ))
                :
                <></>
            }

        </List>
    </div>
    </>
  );
}



// import React, { useEffect } from 'react';

// import Grid from '@material-ui/core/Grid';
// import Cover from '../../assets/default-cover.jpg'
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import GetAppIcon from '@material-ui/icons/GetApp';
// import ShareIcon from '@material-ui/icons/Share';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import { useQuery } from '@apollo/client'
// import {JOURNALS } from '../../Graphql/Query'
// import { STATIC_ROUTE } from '../../settings/url'
// const useStyles = makeStyles((theme) => ({
//     backdrop: {
//         zIndex: theme.zIndex.drawer + 1,
//         color: '#fff',
//     },

// }));
// export default function MediaControlCard() {
//     const classes = useStyles();
//     const { data, loading, error } = useQuery(JOURNALS)
//     console.log(data && data.journals)
//     useEffect(() => {
//         if (error) alert(error.message)
//     }, [error])
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             {
//                 loading ?
//                     <Backdrop open={true} className={classes.backdrop} >
//                         <CircularProgress color="inherit" />
//                     </Backdrop> :
//                     <></>
//             }
//             <div className="foriegn-body">
//                 <h2 className="foriegn-book-header">The foriegn department books</h2>
//                 <Container maxWidth="lg">
//                     <Grid container>
//                         {
//                             data && data.journals ?
//                                 data.journals.map((element, index) => (
//                                     <Grid display='flex' key={index} item md={3} className="book-card" >
//                                         <div className="media">
//                                             <img src={element.cover ? STATIC_ROUTE + element.cover.filename : Cover} className='foriegn-book-cover' alt="cover" />
//                                             <div className="book-icons">
//                                                 {
//                                                     element.file && element.file.filename ?
//                                                         <a href={STATIC_ROUTE + element.file.filename}> <GetAppIcon /> </a> :
//                                                         <></>

//                                                 }
//                                                 <a href="/"> <ShareIcon /> </a>
//                                                 <a href="/"> <VisibilityIcon /></a>
//                                             </div>
//                                         </div>
//                                         <div className="book-body">
//                                             <div className="about-book">
//                                                 <h4 className="book-name">{element.name}</h4>
//                                                 <h6 className="book-author">{element.author}</h6>
//                                             </div>
//                                             <div className="data">
//                                                 <div >{element.resourceType === 2 ? 'printed' : 'digital'}</div>
//                                                 <div>{element.data}</div>
//                                             </div>
//                                         </div>
//                                     </Grid>)
//                                 )
//                                 :
//                                 <></>
//                         }


//                     </Grid>
//                 </Container>
//             </div>
//         </React.Fragment>
//     );
// }
