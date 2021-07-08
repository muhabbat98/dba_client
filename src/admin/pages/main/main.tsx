import Content from '../../components/content';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import { MainContainer, LeftSide, RightSide } from './style';

const Main = () => {
  return (
    <MainContainer>
      <LeftSide>
        <Sidebar />
      </LeftSide>
      <RightSide>
        <Header />
        <Content />
      </RightSide>
    </MainContainer>
  );
};

export default Main;
