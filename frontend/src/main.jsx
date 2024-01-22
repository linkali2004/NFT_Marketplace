import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api.studio.thegraph.com/query/63951/marketplace_linkali/v0.0.1',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ApolloProvider client={client}>
   <App />
   </ApolloProvider>
  </React.StrictMode>,
)
