import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App'
import Popup from './components/Popup'
import Popup2 from './components/Popup2'
import './index.css'

const router = createBrowserRouter([
  {path:"/",element:<App></App>,children:[
    {path:"popup",element:<Popup></Popup>,children:[
      {path:"popup2",element:<Popup2></Popup2>}
    ]},
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
