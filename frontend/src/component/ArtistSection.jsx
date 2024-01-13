import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Heading from './Heading';

export default function ArtistSection() {
  const imgNames=["Artist1.png","Artist2.png","Artist3.png","Artist4.png","Artist5.png","Artist6.png","Artist7.png","Artist8.png","Artist9.png","Artist10.png","Artist11.png","Artist12.png"];
  const names=["Keepitreal","DigiLab","GravityOne","Juanie","BlueWhale","Mr Fox","Shrommie","Robotica","RustyRobot","AnimaKid","Dotgu","Giblier"]
  return (
    <Box sx={{ display: "flex", gap: { xs: "40px" }, flexDirection: "column" ,padding:"20px 30px"}}>
      <Heading title="Top Creators" subtitle="Check out top rated creators on NFT Marketplace" btnname="View rankings"></Heading>
      <Grid container  rowSpacing={{xs:1}}>
        {imgNames.map((data,index)=>{
          return(
            <Grid key={index} item xs={6} md={4} sm={4} lg={2} sx={{display:"flex",justifyContent:"center",cursor:"pointer"}}>
            <Box sx={{width:"200px",height:"200px",backgroundColor:"#3B3B3B",borderRadius:"12px",display:"flex",flexDirection:'column',alignItems:"center"}}>
             <Box sx={{width:"200px"}}> 
             <Avatar sx={{width:"15px",height:"15px",backgroundColor:"#2B2B2B",fontSize:"9px" ,margin:"4px 4px"}}>{index+1}</Avatar>
             </Box>
              <img src={"/"+data} width="100px" height="100px"></img>
              <Typography variant="body1" sx={{fontWeight:"600"}}>{names.at(index)}</Typography>
              <Box sx={{display:"flex",gap:1}}>
              <Typography variant="body1" sx={{fontWeight:"600",color:"#858584",fontSize:"12px"}}>Total sales</Typography>
              <Typography variant="body1" sx={{fontWeight:"600",fontSize:"12px"}}>34.63 ETH</Typography>
              </Box>
            </Box>
        </Grid>

          )
        })}
      </Grid>
      </Box>
  )
}