import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Header } from "./components/Header.jsx";

import { Video } from "./components/Video.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <Header/>  
    <Video/>
  </StrictMode>,
)
