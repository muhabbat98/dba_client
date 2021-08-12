const {USER} = require('../../Graphql/Query')
const {useQuery} =require('@apollo/client')

export default function Home (){
    const { data} = useQuery(USER,{
        variables:{
            userId:parseInt(localStorage.getItem('userid'))
        }
    })
    
    return(<>
        <div className="home-page-welcome">
            <h1 className="welcome-header"> 
            {
                data&&data.users.status===200 ?
                <>{data.users.data[0].full_name}</>:
                <></>
            }
            Welcome to our library​</h1>
            <p>Let’s take the first step together and help you win your case.<br/> We are here every step of the way.</p>
        </div>
    
    </>)
}