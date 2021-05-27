import Menu from './components/menu';
import Header from './components/header';
import Content from './components/content';
import Confirm from './components/confirm';
import Snackbar from './components/snackbar';
import { DashboardContainer, Section } from './style';

function Admin() {
  return (
    <DashboardContainer>
      <Header />
      <Section>
        <Menu />
        <Content />
      </Section>
      <Confirm />
      <Snackbar />
    </DashboardContainer>
  );
}

export default Admin;
