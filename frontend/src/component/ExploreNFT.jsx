import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Heading from './Heading'

export default function ExploreNFT() {
    const imgNames=["explore.png","Explore.png","explored.png"]
    const names=["Distant Galaxy","Life on Ednema","AstroFiction"];
  return (
    <Box sx={{ display: "flex", gap: { xs: "40px" }, flexDirection: "column" ,padding:"20px 30px"}}>
        <Heading title="Discover more NFTs" subtitle="Explore New Trending NFTs" btnname="See All"></Heading>
        <Grid container  rowSpacing={{xs:2}}>
        {imgNames.map((data,index)=>{
          return(
            <Grid key={index} item xs={12} md={4} sm={6} lg={4} sx={{display:"flex",justifyContent:"center",cursor:"pointer"}}>
                      <Box sx={{ display: "flex" , flexDirection:"column",width:"300px",height:"380px"}}>
             <img src={"/"+data} width="300px" height="250px"></img>
             <Box sx={{width:"280px",height:"130px",backgroundColor:"#3B3B3B",padding:"10px",borderRadius:"0px 0px 10px 10px" , display:"flex",flexDirection:"column",gap:1}}>
             <Typography variant="body1" sx={{ fontSize: { xs: "16px", lg: "14px" } ,fontWeight:600}}>{names.at(index)}</Typography>
             <Box sx={{ display: "flex", gap: 1, alignItems: "center"}}>
                        <Avatar src='/Avatar Placeholder.png' sx={{ width: "24px", height: "24px", borderRadius: "50%" }}></Avatar>
                        <Typography variant="body1" sx={{ fontSize: "10px" }}>Mr. Fox</Typography>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
              <Typography variant="body1" sx={{fontWeight:"600",color:"#858584",fontSize:"12px"}}>Price</Typography>
              <Typography variant="body1" sx={{fontWeight:"600",fontSize:"12px"}}>34.63 ETH</Typography>
              </Box>
              <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
              <Typography variant="body1" sx={{fontWeight:"600",color:"#858584",fontSize:"12px"}}>Highest Bid</Typography>
              <Typography variant="body1" sx={{fontWeight:"600",fontSize:"12px"}}>34.63 ETH</Typography>
              </Box>
                    </Box>
             </Box>
        </Box>
        </Grid>

          )
        })}
      </Grid>
        </Box>
  )
}
