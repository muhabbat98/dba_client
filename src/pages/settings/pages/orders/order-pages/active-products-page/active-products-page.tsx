import React from 'react'
import ActiveProductsItem from './active-products-item';

interface ActivePagePropses {
    activeData:any
}
const  ActiveProductsPage:React.FC<ActivePagePropses> = ({activeData}) => {
    return (
        <div style={{marginTop:40}}>
            {activeData && 
                activeData.map((item:any)=>{
                    return (
                        <ActiveProductsItem activeData={item}/>
                    )
                })
            }
        </div>
    )
}

export default ActiveProductsPage
