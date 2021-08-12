import React,{useState,useRef,useEffect} from 'react';
import {ReactComponent as PlusIcon} from '../../assets/icons/vector-plus.svg'
import {axios,useActionCreators,useSelector, useError} from '../../../hooks'
import ModeratorCard from '../../components/moderator-card'
import AddModerator from './add-moderator';
import {Container,HeadBox,CardContainer,Pagenition} from './style'
import { AlertPosition } from '../../../utils/alert-position-enum';

const Moderator = () => {
      const [openModal,setOpenModal] = useState<boolean>(false);
      const [moderatot,setModerator] = useState<any>([])
      const ref = useRef<any>();
      const { setAlertMessage } = useActionCreators();
      const {checkError} = useError();
      useEffect(() => {
          const checkIfClickedOutside = (e: any) => {
              if (openModal && ref.current && !ref.current.contains(e.target)) {
                  setOpenModal(false)
              }
          }
          document.addEventListener("mousedown", checkIfClickedOutside)
          return () => {
              document.removeEventListener("mousedown", checkIfClickedOutside)
          }
      }, [openModal]);

      // ---->API Colls

      useEffect(()=>{
          getModerator();
      })

      const addModeratorItem = (data:any) => {
          addModerator(data);
      }
      const getModerator = async () =>{
          try{
              const res = await axios.get("/moderator");
              console.log('moderators-->',res.data);
          } catch (error) {
              checkError(error);
          }
      }
      const addModerator = async  (getAddItems:any) => {
          console.log("getAddItems => ", getAddItems);
          try{
              const response = await axios.post('/moderator',getAddItems)
              console.log('response-->',response);
          } catch(error) {
              checkError(error);
          }
    }

      return (
      <>
            <Container>
                  <HeadBox>
                        <p>Информация о модераторах</p>
                        <button onClick={()=>setOpenModal(open=>!open)}><PlusIcon/>Добавить модератора</button>
                  </HeadBox>
                  <CardContainer>
                        <ModeratorCard/>
                        <ModeratorCard/>
                        <ModeratorCard/>
                        <ModeratorCard/>
                        <ModeratorCard/>
                        <ModeratorCard/>
                        <ModeratorCard/>
                        <ModeratorCard/>
                  </CardContainer>
                  <Pagenition>
                        <p>Показано 1-15 из 40 товаров</p>
                        <div>
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                        </div>
                  </Pagenition>
                  
            </Container>
            {openModal&&
                <AddModerator
                  reff={ref}
                  setClose={setOpenModal}
                  addModeratorItem={addModeratorItem}
                />}
      </>)
}

export default Moderator;
