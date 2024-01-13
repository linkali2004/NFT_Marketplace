import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from 'react'

export default function Connect() {
  return (
    <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
        <Box sx={{backgroundColor:"#3B3B3B" , borderRadius:"12px",width:"1050px",height:"430px",display:"flex",flexDirection:{xs:"column",lg:"row",sm:"column",md:"row"},justifyContent:"center",alignItems:"center",gap:"20px"}}>
            <img src="/Photo.png" width="420px" height="300px"></img>
            <Box>
            <Typography variant="body1" sx={{fontSize:{xs:"32px",lg:"35px"},}}>Join our weekly Digest.</Typography>
<Typography variant="body1" sx={{fontSize:{xs:"16px",lg:"16px"}}}>Get Exclusive Promotion and updates directly in your inbox.</Typography>
<Stack direction="row" spacing={1} sx={{marginTop:"10px"}}>
<TextField variant="filled" sx={{borderRadius:"10px 10px 0px 0px",border:"none",width: '35ch',backgroundColor:"white"}} name="Email" size="small" placeholder="Enter your email here"/>
<Button variant="contained" sx={{backgroundColor:"#A259FF",marginTop:"15px"}} startIcon={<RocketLaunchIcon></RocketLaunchIcon>}>Get Started</Button>
</Stack>
            </Box>
        </Box>
        </Box>
  )
}
