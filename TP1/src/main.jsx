import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './normalize.css'
import { RouterProvider } from "react-router-dom";
import Router from './Components/router/root.jsx';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
