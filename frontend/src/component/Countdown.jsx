import { Box, Button, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from 'react'

export default function Countdown() {
  return (
    <Box sx={{display:"flex",flexDirection:{lg:"row",xs:"column"},justifyContent:"center",gap:{lg:"100px"},alignItems:{lg:"flex-end",xs:"center"},width:"100%",height:"70vh",background:" linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0, 100)), url('/NFT Highlight.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <Box sx={{display:"flex",flexDirection:"column",gap:"20px",marginBottom:{lg:"40px"}}}>
            <Typography variant="body1" sx={{fontSize:"24px",fontWeight:600}}>Magic Mushrooms</Typography>
            <Button variant="outlined" sx={{marginRight:{lg:"80px"},borderColor:"#A259FF",color:"#A259FF",height:"20%"}} startIcon={<RocketLaunchIcon></RocketLaunchIcon>}>See NFT</Button>
        </Box>
        <Box sx={{backgroundColor:"rgba(0,0,0,0.5)" , width:{lg:"400px",xs:"350px"},height:{lg:"200px",xs:"150px"},borderRadius:"14px",marginBottom:{lg:"40px"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Typography variant="body1" sx={{color:"#858585" , fontWeight:500}}>Auction ends in:</Typography>
            <Box sx={{display:"flex",gap:"22px"}}>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Typography variant="body1" sx={{fontWeight:600,fontSize:"42px"}}>59</Typography>
                    <Typography variant="body1" sx={{fontWeight:600,fontSize:"14px"}}>hours</Typography>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Typography variant="body1" sx={{fontWeight:600,fontSize:"42px"}}>59</Typography>
                    <Typography variant="body1" sx={{fontWeight:600,fontSize:"14px"}}>minutes</Typography>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Typography variant="body1" sx={{fontWeight:600,fontSize:"42px"}}>59</Typography>
                    <Typography variant="body1" sx={{fontWeight:600,fontSize:"14px"}}>seconds</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
