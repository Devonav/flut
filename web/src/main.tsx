import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// These are injected at build time by Vite
declare global {
  const __GRAPHQL_URL__: string
}

const client = new ApolloClient({
  uri: __GRAPHQL_URL__,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </React.StrictMode>
  );