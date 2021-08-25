import Content from '../../components/content';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import { MainContainer, LeftSide, RightSide } from './style';
import { MainContextProvider } from './context';

const Main = () => {
  return (
    <MainContainer>
      <MainContextProvider>
        <LeftSide>
          <Sidebar />
        </LeftSide>
        <RightSide>
          <Header />
          <Content />
        </RightSide>
      </MainContextProvider>
    </MainContainer>
  );
};

export default Main;
