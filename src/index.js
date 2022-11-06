import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/redux/state';
import { addPost } from './components/redux/state';
import { rerenderEntireTree } from './../src/render'

rerenderEntireTree(state);


reportWebVitals();
