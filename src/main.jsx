import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import myStore from './redux/index.jsx'
import {Provider} from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </StrictMode>,
)
