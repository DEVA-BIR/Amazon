import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Reducer,{initialState} from './Reducer';
import { StateProvider } from './StateProvider';
//import reportWebVitals from 'reportWebVitals';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} Reducer={Reducer}>
        <App />
    </StateProvider>
</React.StrictMode>,
  //document.getElementById('root')
);

//reportWebVitals();