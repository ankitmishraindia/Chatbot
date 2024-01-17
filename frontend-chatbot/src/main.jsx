
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppStateProvider } from './myContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppStateProvider>
    <App />
    </AppStateProvider>
)
