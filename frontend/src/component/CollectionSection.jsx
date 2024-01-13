import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Heading from './Heading';

export default function CollectionSection() {
  const primaryNames=["Primary Photo Placeholder.png","Primary Photo Placeholder (1).png","Primary Photo Placeholder (2).png"];
  const secondary=["Secondary Photo Placeholder.png","Secondary Photo Placeholder (2).png","Primary Photo Placeholder (2).png"]
  const names=["DSGN animals","Mistic Mushroom","Disco Robot"]
  const extra = "Secondary Photo Placeholder (1).png"
  return (
    <Box sx={{ display: "flex", gap: { xs: "40px" }, flexDirection: "column" ,padding:"10px 30px"}}>
      <Heading title="Trending Collection" subtitle="Checkout our trending collection updated weekly" btnname="View all"></Heading>
      <Grid container  rowSpacing={{xs:2}}>
        {primaryNames.map((data,index)=>{
          return(
            <Grid key={index} item xs={12} md={4} sm={6} lg={4} sx={{display:"flex",justifyContent:"center",cursor:"pointer"}}>
                      <Box sx={{ display: "flex" , flexDirection:"column",gap:1}}>
             <img src={"/"+data} width="250px" height="250px"></img>
             <Box sx={{display:"flex",gap:"10px",width:"250px",justifyContent:"center"}}>
              <img src={"/"+secondary.at(index)} width="75px" height="75px"></img>
              <img src={(index==0)?"/"+extra:"/"+secondary.at(index)} width="75px" height="75px"></img>
              <Avatar variant="rounded" sx={{backgroundColor:"#A259FF",width:"75px",height:"75px",fontSize:"14px"}}>1025+</Avatar>
             </Box>
             <Typography variant="body1" sx={{ fontSize: { xs: "16px", lg: "14px" } ,fontWeight:600}}>{names.at(index)}</Typography>
             <Box sx={{ display: "flex", gap: 1, alignItems: "center"}}>
                        <Avatar src='/Avatar Placeholder.png' sx={{ width: "24px", height: "24px", borderRadius: "50%" }}></Avatar>
                        <Typography variant="body1" sx={{ fontSize: "10px" }}>Mr. Fox</Typography>
                    </Box>
        </Box>
        </Grid>

          )
        })}
      </Grid>
    </Box>
  )
}
