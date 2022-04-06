import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/pages/Footer"
import './App.css';
import favicon from './imgs/favicon.ico';
import { Helmet } from 'react-helmet';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


//database
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () =>
  <ApolloProvider client={client}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet" />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>
    <body>
      <PortfolioContainer />
      <Footer />
    </body>
  </ApolloProvider>

export default App;
