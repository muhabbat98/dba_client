import React from 'react';
import { duration, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { gsap } from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";
import {useQuery} from '@apollo/client'
import {COUNT} from '../../../Graphql/Query'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


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
});
export default function Resourse (){
    const counts = useRef()
    const numeric = useRef()
    const numeric2 = useRef()
    const numeric3 = useRef()
    const classes = useStyles();    
    const {data} = useQuery(COUNT)
    console.log("data",data)

  

 
    gsap.registerPlugin(ScrollTrigger )

    useEffect(()=>{
        gsap.from(counts.current, 
            {
           scrollTrigger:{
               trigger: counts.current,
           },
           x:-1800,
           ease:'bounce',
           stagger:0.35
       })

       gsap.from([numeric.current,numeric3.current,numeric2.current], 
        {
       scrollTrigger:{
           trigger: numeric.current,
       },
        textContent: 0,
        duration: 4,
        ease: "ease",
        snap: { textContent: 1 },
        delay:1.5
        })
    },[])

   
   

    return(
        <div ref = {counts} className='resources-info'>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h2" align="center" ref={numeric} component="h2">
                           52
                        </Typography>
                
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                        <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/">Learn more</Link>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h2" align="center"  ref={numeric2} component="h2">
                           15
                        </Typography>
                
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                        <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/">Learn more</Link>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h2" align="center"  ref={numeric3} component="h2">
                            1000
                        </Typography>
           
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                        <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/">Learn more</Link>
                    </CardActions>
                </Card>
        </div>
    )
}