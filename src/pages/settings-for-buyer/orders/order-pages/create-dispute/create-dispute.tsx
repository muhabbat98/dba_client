import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Backdrop from '../../../../../components/backdrop'
import {ReactComponent as CloseIcon} from '../../../../../assets/icons/ic_close.svg';
import ProductsTitle from '../../../../../components/products-title';
import Input from '../../../../../components/input';
import Dropdown from '../../../../../components/drop-down';
import Button from '../../../../../components/button';
import { useForm } from "react-hook-form";
import {DisputeContainer,CloseButton,DisputeTitle,InputContainer,Discription} from './style';

interface Propses {
    closeModal?:any;
    getDisputeItem:any
}
const  CreateDispute:React.FC<Propses> = ({closeModal,getDisputeItem}) => {
    const { register, handleSubmit, control, watch, errors, setValue } = useForm();
    const options:any=[];
    getDisputeItem.order.forEach((item:any,index:number) => {
        options[index]=item.itemTitle
    });
    const history = useHistory()
    const [spor1,setSpor1] = useState<any>({value:"Причина спора1"});
    const [spor2,setSpor2] = useState<any>({value:options[0]});
    const [data,setData] = useState<any>(
        {
            spor1:spor1.value,
            spor2:spor2.value,
            blah:getDisputeItem.seller,
            description:"",
        }
    );
        // console.log("sdfdfsd--",getDisputeItem)
    const hundleSubmit = () =>{
        console.log('submit->',data)
        history.push('/settings/discussion')
    }
    return (
        <div>
            <Backdrop close={closeModal}/>
            <DisputeContainer>
                <CloseButton onClick={closeModal}><CloseIcon/></CloseButton>
                <DisputeTitle>
                    <ProductsTitle title="Спор по заказу"/>
                    <ProductsTitle title={`№ ${getDisputeItem.idOrder}`}/>
                </DisputeTitle>
                <InputContainer>
                    <Dropdown 
                        label="Причина спора" 
                        option={["Причина спора1","Причина спора2","Причина спора3"]} 
                        selected={spor1.value}
                        callback={setSpor1}
                        style={{marginTop:32}}
                    />
                    <Dropdown 
                        label="Наименование товара" 
                        option={options} 
                        selected={spor2.value}
                        callback={setSpor2}
                        style={{marginTop:24}}
                    />
                    <Input
                        label="Наименование продавца"
                        placeholder="Наименование продавца"
                        onChange={(e:any)=>setData({...data,blah:e.target.value})}
                        value={data.blah}
                        register={register}
                    />
                    <Discription 
                        placeholder="Расскажите, пожалуйста что произошло"
                        onChange={(e:any)=>setData({...data,description:e.target.value})}
                        value={data.description}
                        />
                    <Button 
                        style={{marginTop:24}}
                        onClick={hundleSubmit}
                        >
                            Начать спор</Button>
                </InputContainer>

            </DisputeContainer>            
        </div>
    )
}

export default CreateDispute; 
