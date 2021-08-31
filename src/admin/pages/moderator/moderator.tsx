import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as PlusIcon } from '../../assets/icons/vector-plus.svg';
import { axios, useActionCreators, useSelector, useError } from '../../../hooks';
import { useMainContext } from '../main/context';
import ModeratorCard from '../../components/moderator-card';
import AddModerator from './add-moderator';
import EditModerator from './edit-moderator';
import { Container, HeadBox, CardContainer, Pagenition } from './style';

const Moderator = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [moderator, setModerator] = useState<any>([]);
    const [openEditModal, setOpenEditModal] = useState<any>(false);
    const [userItem, setUserItem] = useState();
    const [menu, setMenu] = useState<any>([]);
    const ref = useRef<any>();
    const ref2 = useRef<any>();
    const [addModeratorAnswer, setAddModeratorAnswer] = useState<boolean>(false);
    const [editModeratorAnswer, setEditModeratorAnswer] = useState<boolean>(false);
    const { setAlertMessage } = useActionCreators();
    const { checkError } = useError();
    const { setPageTitle } = useMainContext();
    useEffect(() => {
        setPageTitle('Модераторы');
    }, []);

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (openModal && ref.current && !ref.current.contains(e.target)) {
                setOpenModal(false);
            }
        };
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [openModal]);
    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (openEditModal && ref2.current && !ref2.current.contains(e.target)) {
                setOpenEditModal(false);
            }
        };
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [openEditModal]);

    // ---->API Colls

    useEffect(() => {
        getModerator();
        getAllProducts();
    }, []);

    const addModeratorItem = (data: any) => {
        addModerator(data);
    };
    const editModeratorItem = (data: any) => {
        editModerator(data);
    };
    const refreshModerator = (action: boolean) => {
        getModerator();
    };

    const getAllProducts = async () => {
        try {
            const response = await axios.get('catalog?parentId=');
            setMenu(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const getModerator = async () => {
        try {
            const res = await axios.get('/moderator');
            setModerator(res.data.reverse());
            // console.log('moderatorsss-->',res.data);
        } catch (error) {
            checkError(error);
        }
    };
    const addModerator = async (getAddItems: any) => {
        console.log('getAddItems => ', getAddItems);
        try {
            const response = await axios.post('/moderator', getAddItems);
            refreshModerator(true);
            // console.log('response-->',response);
        } catch (error) {
            checkError(error);
            setAddModeratorAnswer(true);
        }
    };
    const editModerator = async (data: any) => {
        try {
            const response = await axios.put('/moderator', data);
            refreshModerator(true);
            setEditModeratorAnswer(true);
        } catch (error) {
            checkError(error);
        }
    };
    const value = (data: any) => {
        // console.log('rerere--',data)
    };
    return (
        <>
            <Container>
                <HeadBox>
                    <p>Информация о модераторах</p>
                    <button onClick={() => setOpenModal(open => !open)}><PlusIcon />Добавить модератора</button>
                </HeadBox>
                <CardContainer>
                    {moderator.map((item: any) => (
                        <ModeratorCard
                            key={item.id}
                            item={item}
                            refreshModerator={refreshModerator}
                            setUserItem={setUserItem}
                            setOpenModal={setOpenEditModal}

                        />
                    ))}
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
            {openEditModal &&
            <EditModerator
              editModeratorItem={editModeratorItem}
              reff={ref2}
              setClose={setOpenEditModal}
              userItem={userItem}
              menu={menu}
            />
            }
            {openModal &&
            <AddModerator
              reff={ref}
              setClose={setOpenModal}
              addModeratorItem={addModeratorItem}
              requestAnswer={addModeratorAnswer}
            />}
        </>);
};
export default Moderator;