import { Box, Button, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from 'react'

export default function Connect() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  return (
    <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
        <Box sx={{backgroundColor:"#3B3B3B" , borderRadius:"12px",width:{lg:"1050px",xs:"350px",sm:"600px"},height:{lg:"430px",xs:"510px"},display:"flex",flexDirection:{xs:"column",lg:"row",sm:"column",md:"row"},justifyContent:"center",alignItems:"center",gap:"20px"}}>
            <img src="/Photo.png" style={{width:isSmallDevice || isMediumDevice ?"30vh":"50vh",height:isSmallDevice||isMediumDevice ?"25vh":"40vh"}}></img>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",height:"180px"}}>
            <Typography variant="body1" sx={{fontSize:{xs:"16px",lg:"35px"}}}>Join our weekly Digest.</Typography>
<Typography variant="body1" sx={{fontSize:{xs:"16px",lg:"12px"},padding:"10px"}}>Get Exclusive Promotion and updates directly in your inbox.</Typography>
<Stack direction={{xs:"column",lg:"row"}} spacing={1} sx={{marginTop:"10px" ,padding:"10px"}}>
<TextField variant="filled" sx={{borderRadius:"10px 10px 0px 0px",border:"none",width: '35ch',backgroundColor:"white"}} name="Email" size="small" placeholder="Enter your email here"/>
<Button variant="contained" sx={{backgroundColor:"#A259FF",marginTop:"15px"}} startIcon={<RocketLaunchIcon></RocketLaunchIcon>}>Get Started</Button>
</Stack>
            </Box>
        </Box>
        </Box>
  )
}
