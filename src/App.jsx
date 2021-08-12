import './App.css';
import Menyu from './Components/Menyu'
import Home from './Components/Home'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard/index'
import { Route, Switch } from 'react-router-dom'
import Foriegn from './Components/Foriegn';
function App() {
	return (<>
		<Menyu />
		<Switch>
			<Route path='/' exact> <Home />  </Route>
			<Route path='/login' exact> <Login />  </Route>
			<Route path='/dashboard'> <Dashboard /> </Route>
			<Route path='/foriegn'> <Foriegn /> </Route>

		</Switch>
	</>
	);
}

export default App;
