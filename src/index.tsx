import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './store';
import { theme } from './theme';
import './index.css';
import ScrollToTop from './components/scroll-to-top';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <App />
        </ThemeProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
