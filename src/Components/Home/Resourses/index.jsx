import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

    const [numbers, setNumbers] = useState([0,0,0])
    const classes = useStyles();    
    const {data} = useQuery(COUNT)
   

  

 
    gsap.registerPlugin(ScrollTrigger )
    useEffect(()=>{
        if(data){
            setNumbers(data.countResources.map((e, i)=>{
                setInterval(()=>{
                    if(numbers[i]<=e.count){
                        console.log(numbers[i])
                    }
                })
            }))
           
        }
    },[data,numbers])
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
      
    //    gsap.from(numbers, 
    //     {
    //    scrollTrigger:{
    //        trigger: counts.current,
    //    },
    //     textContent: 0,
    //     duration: 10,
    //     ease: "ease",
    //     snap: { textContent: 1 },
    //     delay:1.5
    //     })
    },[])

   
   

    return(
        <div ref = {counts} className='resources-info'>
                {
                    data?data.countResources.map((elem,i)=><Card key={i} className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title}  color="textSecondary" gutterBottom>
                            Word of the Day 
                        </Typography>
                        <Typography variant="h2" align="center" ref={numeric} component="h2">

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
                <></>
                }
      
        </div>
    )
}