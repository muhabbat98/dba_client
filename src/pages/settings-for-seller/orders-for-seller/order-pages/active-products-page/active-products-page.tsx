import React from 'react'
import ActiveProductsItem from './active-products-item';
import {useWindowSize} from '../../../../../hooks/useWindowSize';
interface ActivePagePropses {
    activeData:any
    setOpen:any
    setGetDisputeItem:any
}
const  ActiveProductsPage:React.FC<ActivePagePropses> = ({activeData,setOpen,setGetDisputeItem}) => {
    const [width,height] = useWindowSize();
    return (
        <div style={{marginTop:width>768?40:20}}>
            {activeData && 
                activeData.map((item:any,index:number)=>{
                    return (
                        <ActiveProductsItem
                        key={index} 
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
