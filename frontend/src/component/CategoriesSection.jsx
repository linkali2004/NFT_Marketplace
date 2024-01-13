import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Heading from './Heading'

export default function CategoriesSection() {
    const imgNames =["Image Placeholder.png","Image Placeholder (1).png" ,"Image Placeholder (2).png","Image Placeholder (3).png","Image Placeholder (4).png","Image Placeholder (5).png","Image Placeholder (6).png","Image Placeholder (7).png"];
    const names = ["Art","Collectibles","Music","Photography","Video","Utility","Sport","Virtual Worlds"]; 
  return (
    <Box sx={{ display: "flex", gap: { xs: "40px" }, flexDirection: "column" ,padding:"20px 30px"}}>
        <Heading title="Browse Categories" subtitle=""></Heading>
        <Grid container  rowSpacing={{xs:2}}>
        {imgNames.map((data,index)=>{
          return(
            <Grid key={index} item xs={12} md={4} sm={4} lg={3} sx={{display:"flex",justifyContent:"center",cursor:"pointer"}}>
            <Box sx={{width:"200px",height:"250px",backgroundColor:"#3B3B3B",borderRadius:"12px",display:"flex",flexDirection:'column',alignItems:"center"}}>
              <img src={"/"+data} width="200px" height="200px"></img>
              <Box sx={{display:"flex",gap:1,alignItems:"center",height:"50px"}}>
              <Typography variant="body1" sx={{fontWeight:"600",fontSize:"12px"}}>{names.at(index)}</Typography>
              </Box>
            </Box>
        </Grid>

          )
        })}
      </Grid>
        </Box>
  )
}
