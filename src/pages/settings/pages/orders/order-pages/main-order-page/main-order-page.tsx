import React,{useState} from 'react'
import HistoryPage from '../history-page';
import ActiveProductsPage from '../active-products-page';
import CreateDispute from '../create-dispute';
import {ReactComponent as FilterIcon} from '../../../../../../assets/icons/filter-icon.svg';
import {MainWrapper,OrderHeader,AppBar1,AppBar2,FilterButtonContainer} from './style';

interface Propses{
    history:any,
    activeData:any,
}
const MainOrderPage: React.FC<Propses> = ({history,activeData}) => {
    const [state,setState] = useState({active:true,history:false});
    const [open, setOpen] = useState<boolean>(false);
    const [filterOpen,setFilterOpen] = useState<boolean>(false);
    const [getDisputeItem,setGetDisputeItem] = useState<any>();
    const appBar1 = ( ) => {
        setState({active:true,history:false});
    }
    const appBar2 = ( ) => {
        setState({active:false,history:true});
    }
    const closeModal = () => setOpen(false);
    return (
        <MainWrapper state={state.active}>
            <OrderHeader >
                <div>
                    <AppBar1 state={state.active} onClick={appBar1} >Активные</AppBar1>
                    <AppBar2 state={state.history} onClick={appBar2}>История</AppBar2>
                </div>
                {
                    state.history &&
                    <FilterButtonContainer onClick={()=>setFilterOpen(open=>!open)}><FilterIcon/>Фильтр</FilterButtonContainer>
                }
                
            </OrderHeader>
            {
                state.active && <div>
                    <ActiveProductsPage 
                        activeData={activeData} 
                        setOpen={setOpen} 
                        setGetDisputeItem={setGetDisputeItem}/> 
                </div>
            }
            {
                state.history && <div>
                    <HistoryPage 
                        filterOpen={filterOpen} 
                        history = {history}
                        setOpen={setOpen}
                        setGetDisputeItem={setGetDisputeItem}
                        />
                </div>
            }

            {open && <CreateDispute closeModal={closeModal} getDisputeItem={getDisputeItem}/> }
        </MainWrapper>
    )
}

export default MainOrderPage;