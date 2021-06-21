import Header from '../../components/header';
import Content from '../../components/content';
import Footer from '../../components/footer';
import Alert from '../../components/alert';
import Confirm from '../../components/confirm';

const Main = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <>
        {/* {Helper components} */}
        <Confirm /> <Alert />
      </>
    </div>
  );
};

export default Main;
