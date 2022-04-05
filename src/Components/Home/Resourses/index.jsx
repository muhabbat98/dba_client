import React from 'react';
import {  makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useQuery} from '@apollo/client'
import {COUNT} from '../../../Graphql/Query'
import { Link } from 'react-router-dom';
import { List } from 'react-content-loader';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    },
    loader: {
        position: 'relative',
        top: '-80px'
  }
});
export default function Resourse (){

    const classes = useStyles();    
    const { data } = useQuery( COUNT );   
   

    return(
        <div  className='resources-info'>
                {
                    data&&data.countResources?data.countResources.map((elem,i)=><Card key={i} className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title}  color="textSecondary" gutterBottom>
                            Word of the Day 
                        </Typography>
                        <Typography variant="h2" align="center" component="h2">

                           {
                               elem.count
                           }
                        </Typography>
                
                        <Typography variant="body2" component="p">
                            {elem.name}
                        <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/">Learn more</Link>
                    </CardActions>
                </Card>)
                :
                <>
                        <List className={classes.loader}/>
                        <List className={classes.loader}/>
                        <List className={classes.loader}/>
                </>
                }
        </div>
    )
}