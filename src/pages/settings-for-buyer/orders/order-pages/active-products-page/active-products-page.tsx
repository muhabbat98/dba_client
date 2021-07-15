import React from 'react'
import ActiveProductsItem from './active-products-item';

interface ActivePagePropses {
    activeData:any
    setOpen:any
    setGetDisputeItem:any
}
const  ActiveProductsPage:React.FC<ActivePagePropses> = ({activeData,setOpen,setGetDisputeItem}) => {
    return (
        <div style={{marginTop:40}}>
            {activeData && 
                activeData.map((item:any)=>{
                    return (
                        <ActiveProductsItem 
                        activeData={item} 
                        setOpen={setOpen}
                        setGetDisputeItem={setGetDisputeItem}
                        />
                    )
                })
            }
        </div>
    )
}

export default ActiveProductsPage
