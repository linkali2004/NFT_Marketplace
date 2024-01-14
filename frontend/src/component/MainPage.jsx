import { Box } from '@mui/material'
import React from 'react'
import Hero from './Hero'
import CollectionSection from './CollectionSection'
import ArtistSection from './ArtistSection'
import CategoriesSection from './CategoriesSection'
import ExploreNFT from './ExploreNFT'
import Countdown from './Countdown'
import Howitworks from './Howitworks'
import Connect from './Connect'

export default function MainPage() {
  return (
     <>
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
      <Countdown></Countdown>
      <br></br>
      <Howitworks></Howitworks>
      <br></br>
      <Connect></Connect>
      <br></br>
    </Box>
     </>
  )
}
