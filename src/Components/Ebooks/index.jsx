import * as React from 'react';

import { useQuery } from '@apollo/client'
import { DEPARTMENT } from '../../Graphql/Query'
import Department from './Departments'

export default function VerticalTabs() {
    
    const { data } = useQuery( DEPARTMENT )

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
      <div style={{display:"flex", background:"transparent"}}>
          <div className="ebook-menu" style={{display:"flex",alignItems:"center", justifyContent:"center", height:"100vh"}}>

              <ul>
                  <li style={{fontWeight:"bold", textTransform:"uppercase", color:"teal"}}> Departments </li>
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

