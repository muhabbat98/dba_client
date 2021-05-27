import React from 'react'
import Button from '../../../../../../components/button';
import Titile from '../../../../../../components/products-title';
import {ReactComponent as Frame} from './Frame3.svg';
import {DefaultPageContainer} from './style';

interface PageProps{
    setOpen?:any;
}

const DefautlOrderPage: React.FC<PageProps> = ({setOpen}) => {
    return (
        <DefaultPageContainer>
            <Frame/>
            <Titile title="Здесь будеть храниться история вашых заказов"/>
            <Button onClick={()=>setOpen(true)} >Продолжить покупки</Button>
            
        </DefaultPageContainer>
    )
}

export default DefautlOrderPage