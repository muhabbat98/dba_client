import { Card, CardContent, Container, Typography } from '@material-ui/core'
import About from './About'
import Resourse from './Resourses'
import Workers from './Workers'
import Footer from '../Footer'
const {USER} = require('../../Graphql/Query')
const {useQuery} =require('@apollo/client')


const Name = ()=>{
    const {data} = useQuery(USER, { variables:{
        userId:parseInt(localStorage.getItem('userid'))
    }})
    return <>{data&&data.user ? data.user.fullName||data.user.username : ""}</>
}

export default function Home (){
 
    
    return(<>
        <div className="home-page-welcome">
            <h1 className="welcome-header"> 
            {
                localStorage.getItem("userid")?<Name/> : "user "
            }
            Welcome to our library​</h1>
            <p>Let’s take the first step together and help you win your case.<br/> We are here every step of the way.</p>
        </div>
        <Resourse />
        <Container>
            <Card className="sitation-section" >
                <CardContent className= "sitation">        
                    
                    <Typography  color="textSecondary" gutterBottom>
                                Word of the Day
                    </Typography>
                    <Typography variant="h2" component="h2">
                        1000
                    </Typography>
            
                    <Typography variant="body2" component="p">
                        well meaning and kindly.                
                    </Typography>
                
                </CardContent>
            </Card>
        </Container>
        <About/>
        <Workers/>
    </>)
}