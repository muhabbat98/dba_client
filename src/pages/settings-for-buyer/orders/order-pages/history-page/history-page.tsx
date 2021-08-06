import React from 'react'
import HistoryItem from './history-item';
import SettingsInput from '../../../../../components/settings-input';
import SettingsDropdown from '../../../../../components/settings-dropdown';
import { useWindowSize } from '../../../../../hooks/useWindowSize';
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/blueArrow.svg';
import {
    TableHeader,
    Table,
    FilterContainer,
    PagenitionInfo,
    PageSelector
} from './style'

interface Propses{
    history:any,
    filterOpen:boolean,
    setOpen:any
    setGetDisputeItem:any
}
const  HistoryPage: React.FC<Propses> = ({history,filterOpen,setOpen,setGetDisputeItem}) => {
    const [width,height] = useWindowSize();
    const func = (data:any) =>{
        console.log('------->',data)
    }
    return (
        <div>
            {filterOpen &&
                <FilterContainer >
                    {width>768 ? <>
                        <SettingsInput placeholder="ID Заказа" />
                        <SettingsInput placeholder="Стоимость" />
                        <SettingsDropdown 
                            style={{width:"100%"}} 
                            label="Статус"
                            options={["Все","Отменён","Доставлен"]}
                            getOption={func}
                        />
                        <SettingsInput placeholder="Продавец" />
                    </>
                    :<div style={{display: "flex",justifyContent: "space-between",}}>
                        <div style={{marginRight:12}}>
                            <SettingsInput placeholder="ID Заказа" />
                            <SettingsInput placeholder="Стоимость" style={{marginTop:16}} />
                        </div>
                        <div>
                        <SettingsDropdown 
                            style={{width:"100%"}} 
                            label="Статус"
                            options={["Все","Отменён","Доставлен"]}
                            getOption={func}
                        />
                        <SettingsInput placeholder="Продавец"style={{marginTop:16}}/>
                        </div>
                    </div>}
                </FilterContainer>  
            }
            
            <Table>
                {width>768 ?
                    <TableHeader>
                        <div><p>ID Заказа</p></div>
                        <div><p>Стоимость</p></div>
                        <div><p>Cтатус</p></div>
                        <div><p>Продавец</p></div>
                        <div></div>
                    </TableHeader>
                    :<>
                        <div style={{display:"flex",justifyContent: "space-between"}}>
                            <PagenitionInfo>11 - 14 из 65 результата</PagenitionInfo>
                            <PageSelector><p>страницы: </p><div>4<ArrowIcon/></div></PageSelector>
                        </div>
                    </>
                }
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