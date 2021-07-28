import React,{useState,useRef,useEffect} from 'react';
import {ReactComponent as PlusIcon} from '../../assets/icons/vector-plus.svg'
import ModeratorCard from '../../components/moderator-card'
import AddModerator from './add-moderator';
import {Container,HeadBox,CardContainer,Pagenition} from './style'

const Moderator = () => {
      const [openModal,setOpenModal] = useState<boolean>(false);
      const ref = useRef<any>()
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
      }, [openModal])
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
            {openModal&&<AddModerator reff={ref} setClose={setOpenModal}/>}
      </>)
}

export default Moderator;