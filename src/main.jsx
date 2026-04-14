import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import CounterApp from './CounterApp.jsx'
import SearchBar from './SearchBar.jsx'
import SecretMessage from './SecretMessage.jsx'
import TodoList from './TodoList.jsx'
import UseEffects from './UseEffects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Uncomment each line to check the code */}
    {/* <App /> */}
    {/* <Dashboard /> */}
    {/* <CounterApp /> */}
    {/* <SearchBar /> */}
    {/* <SecretMessage /> */}
    {/* <TodoList /> */}
    {/* <UseEffects /> */}
  </StrictMode>,
)
