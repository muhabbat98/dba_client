import { Card, CardContent, Container, Typography } from '@material-ui/core'
import About from './About'
import Resourse from './Resourses'
import Workers from './Workers'
import Footer from '../Footer'
import {USER} from '../../Graphql/Query'
import {useQuery} from '@apollo/client'
import { languages, useLanguage } from '../../Providers/LangProvider'


const Name = ()=>{
    const {data} = useQuery(USER, { variables:{
        userId:parseInt(localStorage.getItem('userid'))
    }})
    return <>{data&&data.user ? data.user.fullName||data.user.username : ""}</>
}

export default function Home (){
    const [language ]= useLanguage(false)
    console.log(languages[language].welcome)
    return(<>
        <div className="home-page-welcome">
            <h1 className="welcome-header"> 
            {
                localStorage.getItem("userid")?<Name/> : "user "
            }
                {languages[language].welcome}​
            </h1>
            <p>{languages[language].headerFirst}<br/>{languages[language].headerSecond}</p>
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