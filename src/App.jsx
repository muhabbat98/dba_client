import './App.css';
import Menyu from './Components/Menyu'
import Home from './Components/Home'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard/index'
import { Route, Switch, useLocation } from 'react-router-dom'
import Foriegn from './Components/Foriegn';
import Science from './Components/Science';
import Journal from './Components/Journal';
import About from './Components/About'
import Footer from './Components/Footer';
import Ebooks from './Components/Ebooks'
import { useEffect } from 'react';

function App ()
{
	const {pathname} = useLocation()
	useEffect( () =>
	{
		let token = window.localStorage.getItem( "token" )
		console.log(window.location.pathname)
		// if ( !token&&pathname!=="/login" )
		// {
		// 	window.location.replace('/login')
		// }
	},[pathname])
	return (<>
		<Menyu />
		<Switch>
			<Route path='/' exact> <Home />  </Route>
			<Route path='/login' exact> <Login />  </Route>
			<Route path='/dashboard'> <Dashboard /> </Route>
			<Route path='/foriegn'> <Foriegn /> </Route>
			<Route path='/science'> <Science /> </Route>
			<Route path='/journals'> <Journal /> </Route>
			<Route path='/about'> <About /> </Route>
			<Route path='/ebooks'> <Ebooks/> </Route>

		</Switch>
		<Footer/>
	</>
	);
}

export default App;
