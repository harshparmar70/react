import './index.css'
import ReactDOM, { createRoot } from 'react-dom/client' // impotant for react dom 
import Appp from './App.jsx'
import {root2fun} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<Appp />) // create root 
ReactDOM.createRoot(document.getElementById('root2')).render(root2fun())
