import { Box, Button, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from 'react'

export default function Heading({title,subtitle,btnname}) {
  return (
    <Box sx={{ display: "flex" ,flexDirection:{xs:"column",lg:"row"},gap:{xs:2},width:"100%",justifyContent:"space-between",alignItems:"center"}}>
    <Box sx={{marginLeft:{lg:"80px"}}}>
      <Typography variant="body1" sx={{ fontSize: { xs: "32px", lg: "24px" },fontWeight:500}}>{title}</Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: "16px", lg: "14px" } }}>{subtitle}</Typography>
    </Box>
   {btnname &&  <Button variant="outlined" sx={{marginRight:{lg:"80px"},borderColor:"#A259FF",color:"#A259FF",height:"20%"}} startIcon={<RocketLaunchIcon></RocketLaunchIcon>}>{btnname}</Button>}
  </Box>
  )
}
