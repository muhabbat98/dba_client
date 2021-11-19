import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import { useQuery } from '@apollo/client'
import { DEPARTMENT } from '../../Graphql/Query'
import Department from './Departments'

export default function VerticalTabs() {
    
    const { data, loading, error } = useQuery( DEPARTMENT )

    const [ value, setValue ] = React.useState(  );
 
    // console.log("data ",value)
    React.useEffect( () =>
    {
        if ( data && data.departments )
        {
            setValue( data.departments[ 0 ].id )
        }
    },[data])

  return (
      <div style={{display:"flex"}}>
          <div className="ebook-menu">
              <ul>
                  {
                      data && data.departments.map( u => <li key={ u.id } className={value===u.id?"active-menu":""} onClick={()=>setValue(u.id)}>{u.name}</li>)
                  }
              </ul>
          </div>
          <div>
              <Department data={{id:value} }/>
          </div>

      </div>
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
// import { DEPARTMENT } from '../../Graphql/Query'
// import { STATIC_ROUTE } from '../../settings/url'
// import Department from './Departments/'
// const useStyles = makeStyles((theme) => ({
//     backdrop: {
//         zIndex: theme.zIndex.drawer + 1,
//         color: '#fff',
//     },

// }));
// export default function MediaControlCard() {
//     const classes = useStyles();
//     const { data, loading, error } = useQuery(DEPARTMENT)

//     useEffect(() => {
//         console.log(data)
//         if (error) alert(error.message)
//     }, [error])
//     useEffect(() => {
//         console.log(data)
//     },[data])
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
//                 {
//                     data && data.departments.map((u,i) => <Department data={u} key={i}></Department>)
//                 }
//                 <h2 className="foriegn-book-header">The foriegn department books</h2>
            
//                 <Container maxWidth="lg">
//                     <Grid container>
//                         {/* {
//                             data && data.foriegnBooks ?
//                                 data.foriegnBooks.map((element, index) => (
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
//                         } */}


//                     </Grid>
//                 </Container>
//             </div>
//         </React.Fragment>
//     );
// }