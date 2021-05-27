import React,{useState} from 'react'
import HistoryPage from '../history-page';
import ActiveProductsPage from '../active-products-page';
import {ReactComponent as FilterIcon} from '../../../../../../assets/icons/filter-icon.svg';
import {MainWrapper,OrderHeader,AppBar1,AppBar2,FilterButtonContainer} from './style';

interface Propses{
    history:any,
    activeData:any,
}
const MainOrderPage: React.FC<Propses> = ({history,activeData}) => {
    const [state,setState] = useState({active:true,history:false});
    const [filterOpen,setFilterOpen] = useState(false);
    const appBar1 = ( ) => {
        setState({active:true,history:false});
    }
    const appBar2 = ( ) => {
        setState({active:false,history:true});
    }

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
                   <ActiveProductsPage activeData={activeData}/> 
                </div>
            }
            {
                state.history && <div>
                    <HistoryPage filterOpen={filterOpen} history = {history}/>
                </div>
            }
        </MainWrapper>
    )
}

export default MainOrderPage;