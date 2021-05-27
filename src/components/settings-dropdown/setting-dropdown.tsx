import React,{useState,useRef} from 'react'
import {ReactComponent as  Arrow} from '../../assets/icons/down-arrow2.svg'
import {DropDownContainer,DropDownInput,DropDownList,ListOption} from './style';

interface Propses extends React.InputHTMLAttributes<HTMLInputElement>{
    label:string;
    options:any[];
    getOption?:any;
}
const SettingDropdown:React.FC<Propses> = ({label,options,getOption,...rest}) => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const[option,setOption] = useState<any>();
    const selectOption = (data:any)=>{
        setOption(data);
        setIsOpen(false);
        getOption(data);
    }
    return (
        <DropDownContainer isOpen={isOpen} {...rest}>
            <DropDownInput state={option?true:false} onClick={()=>setIsOpen(open=>!open)}>
                <p>{option||label}</p>
                <Arrow/>
            </DropDownInput>
            <DropDownList isOpen={isOpen} >
                {options && options.map((item,index)=>(
                    <ListOption key={index} state={option==item?true:false} onClick={()=>selectOption(item)}>{item}</ListOption>
                ))}
            </DropDownList>
        </DropDownContainer>
    )
}

export default SettingDropdown;