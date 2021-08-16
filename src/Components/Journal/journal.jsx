import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import {useQuery} from '@apollo/client'
import {EXACT_JOURNAL} from '../../Graphql/Query'
import { STATIC_ROUTE } from '../../settings/url'
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
      paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display:'none'
      },
      modal_button:{
         
          backgroundColor:'#D3B574',
          color:'#2A2A50',
          textDecoration:'none',
          fontSize:'14px',
          padding:'12px',
          borderRadius:'8px',
          display:'flex',
          alignItems:'center'
      }
  }));

export default function Journal({journalId}) {
    const classes = useStyles();
    const {data} = useQuery(EXACT_JOURNAL, {
        variables:{
            id:journalId}
    })
    const [open, setOpen] = React.useState(0);

    return  (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
          >
            {
                data&&data.exactJournals ? 
                    data.exactJournals.map((element, index)=>(
                        <ListItem key={index} button>
                            
                            <ListItemText primary={"Serial Number "+ element.serialNumber} />

                            { !element.file? null :<>
                               
                                <a className={classes.modal_button} href={STATIC_ROUTE + element.file.filename} target="blank"> <PlayForWorkIcon/> download </a>
                            </>
                            }
                        </ListItem>
                    ))
                 :<></>
            }
        </List>
    )
}