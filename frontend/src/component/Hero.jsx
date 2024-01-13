import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Hero() {
    return (
        <Box sx={{ display: "flex", gap:{xs:"40px"},flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, justifyContent: "center", alignItems: "center", padding:{xs:"40px 0px", lg:"80px 0px"}}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: 1, minWidth: "200px", minHeight: "200px", justifyContent: "center", alignItems: {xs:"center",lg:"flex-start" }}}>
            <Typography variant="body1" sx={{fontSize:{xs:"32px",lg:"48px"},width:"80%"}}>Discover Digital Arts & Collect NFTs</Typography>
<Typography variant="body1" sx={{fontSize:{xs:"16px",lg:"16px"},width:"80%"}}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</Typography>
<Button variant="contained" sx={{backgroundColor:"#A259FF",marginTop:"15px"}} startIcon={<RocketLaunchIcon></RocketLaunchIcon>}>Get Started</Button>

<Box sx={{display:"flex",gap:"50px",marginTop:"20px"}}>
<Box>
    <Typography variant="body1" sx={{fontWeight:"500"}}>240k+</Typography>
    <Typography variant="body2">Total Sale</Typography>
</Box>
<Box>
    <Typography variant="body1" sx={{fontWeight:"500"}}>100k+</Typography>
    <Typography variant="body2">Auctions</Typography>
</Box>
<Box>
    <Typography variant="body1" sx={{fontWeight:"500"}}>240k+</Typography>
    <Typography variant="body2">Artists</Typography>
</Box>
</Box>

            </Box>

            <Box sx={{  minHeight: "200px", minWidth: "200px", display: "flex", flexDirection: "column", gap: 0, justifyContent: "center", alignItems: "flex-start" }}>
                <img src="/Highlighted NFT.png" width="300px" height="201px" style={{ borderRadius: "10px 10px 0px 0px" }} />
                <Box sx={{ backgroundColor: "#3B3B3B", width: "280px", padding: "20px 10px", borderRadius: "0px 0px 10px 10px" }}>
                    <Typography variant="body1">Space Walking</Typography>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center", marginTop: "8px" }}>
                        <Avatar src='/Avatar Placeholder.png' sx={{ width: "24px", height: "24px", borderRadius: "50%" }}></Avatar>
                        <Typography variant="body1" sx={{ fontSize: "10px" }}>Anime kid</Typography>
                    </Box>
                </Box>


            </Box>


        </Box>
    )
}
