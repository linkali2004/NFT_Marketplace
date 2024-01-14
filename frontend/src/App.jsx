import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Box } from '@mui/material'
import Hero from './component/Hero'
import CollectionSection from './component/CollectionSection'
import ArtistSection from './component/ArtistSection'
import CategoriesSection from './component/CategoriesSection'
import ExploreNFT from './component/ExploreNFT'
import Howitworks from './component/Howitworks'
import Connect from './component/Connect'
import Footer from './component/Footer'
import Countdown from './component/Countdown'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from './component/Layout'
import MainPage from './component/MainPage'
import CreatorPage from "./component/CreatorPage"
import Login from './component/Login'
import Marketplace from './component/Marketplace'
import NFTpage from './component/NFTpage'
import Rankings from './component/Rankings'
import { UserContextProvider } from './context/UserContext'
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout></Layout>,
      children:[
        {
          path:"/",
           element:<MainPage></MainPage>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/creatorPage",
          element:<CreatorPage></CreatorPage>
        },
        {
          path:"/marketplace",
          element:<Marketplace></Marketplace>
        },
        {
          path:"/nftpage",
          element:<NFTpage></NFTpage>
        },
        {
          path:"/rankings",
          element:<Rankings></Rankings>
        }
      ]
    }
  ])
  return (
    <>
    <UserContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
    </>
  )
}

export default App
