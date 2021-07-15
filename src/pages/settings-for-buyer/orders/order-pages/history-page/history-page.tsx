import React from 'react'
import HistoryItem from './history-item';
import SettingsInput from '../../../../../components/settings-input';
import SettingsDropdown from '../../../../../components/settings-dropdown';
import {TableHeader,Table,FilterContainer} from './style'

interface Propses{
    history:any,
    filterOpen:boolean,
    setOpen:any
    setGetDisputeItem:any
}
const  HistoryPage: React.FC<Propses> = ({history,filterOpen,setOpen,setGetDisputeItem}) => {
    const func = (data:any) =>{
        console.log('------->',data)
    }
    return (
        <div>
            {filterOpen &&
                <FilterContainer >
                    <SettingsInput placeholder="ID Заказа" />
                    <SettingsInput placeholder="Стоимость" />
                    <SettingsDropdown 
                        style={{width:"100%"}} 
                        label="Статус"
                        options={["Все","Отменён","Доставлен"]}
                        getOption={func}
                    />
                    <SettingsInput placeholder="Продавец" />
                </FilterContainer>  
            }
            
            <Table>
                <TableHeader>
                    <div><p>ID Заказа</p></div>
                    <div><p>Стоимость</p></div>
                    <div><p>Cтатус</p></div>
                    <div><p>Продавец</p></div>
                    <div></div>
                </TableHeader>
                
                {
                    history.map((item:any,index:number)=>{
                        return(
                            <HistoryItem 
                                item={item} 
                                key={index}
                                setOpen={setOpen}
                                setGetDisputeItem={setGetDisputeItem}
                                />
                        )
                    })
                }
            </Table> 
        </div>
    )
}

export default HistoryPage