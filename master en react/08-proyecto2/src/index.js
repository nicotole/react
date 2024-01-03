import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>)

// https://stackoverflow.com/questions/70368760/react-uncaught-referenceerror-process-is-not-defined