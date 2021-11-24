import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {LanguageProvider} from './Providers/LangProvider'
import {ApolloClient,	InMemoryCache,	ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
	uri: 'https://dbauz.herokuapp.com/graphql'
  });

const authLink = setContext((_, { headers }) => {
	
	const token = localStorage.getItem('token')||'';

	return {
	  headers: {
		...headers,
		token,
	  }
	}
  });
  const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
  });
ReactDOM.render(
		<BrowserRouter>
			<LanguageProvider>
				<ApolloProvider client={client}>
					<App/>
				</ApolloProvider>
			</LanguageProvider>
		</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
