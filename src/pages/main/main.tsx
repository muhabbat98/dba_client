import Header from '../../components/header';
import Content from '../../components/content';
import Footer from '../../components/footer';
import Alert from '../../components/alert';
import Confirm from '../../components/confirm';
import Login from '../../components/login';

const Main = () => {
  return (
    <div>
      {/* <Header /> */}
      <Content />
      <Footer />
      <>
        {/* {Helper components} */}
        <Confirm /> <Alert />
        <Login />
      </>
    </div>
  );
};

export default Main;
