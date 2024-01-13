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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Box>
      <Hero></Hero>
      <CollectionSection></CollectionSection>
      <br></br>
      <ArtistSection></ArtistSection>
      <br></br>
      <CategoriesSection></CategoriesSection>
      <br></br>
      <ExploreNFT></ExploreNFT>
      <br></br>
      <img src="/NFT Highlight.png" width="100%" height="350vh"></img>
      <br></br>
      <Howitworks></Howitworks>
      <br></br>
      <Connect></Connect>
    </Box>
    </>
  )
}

export default App
