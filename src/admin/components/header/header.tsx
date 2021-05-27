import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Logout } from '../../assets/icons/logout.svg';
import { useActionCreators } from '../../../hooks/useActionCreators';
import { HeaderContainer, Actions, Title, HomeContainer } from './style';

function Header() {
  const { cleanUser, setConfirm, cleanConfirm } = useActionCreators();

  const exit = () => {
    setConfirm({
      message: 'Вы действительно хотите выйти?',
      callback: () => {
        cleanUser();
        cleanConfirm();
      },
    });
  };

  return (
    <HeaderContainer>
      <Title>Админ панель</Title>
      <Actions>
        <HomeContainer>
          <Link to='/'>
            <Home title='Перейти к сайту' /> <div> Перейти к сайту</div>
          </Link>
        </HomeContainer>
        <HomeContainer onClick={exit}>
          <a onClick={(e) => e.preventDefault()}>
            <Logout title='Выйти' />
            <div> Выйти</div>
          </a>
        </HomeContainer>
      </Actions>
    </HeaderContainer>
  );
}

export default Header;
