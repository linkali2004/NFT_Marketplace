import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react'

export default function NFTpage() {
  return (
    <Box>
        <Box sx={{backgroundImage:"url(/bg.png)" , width:"100%" , height:{lg:"400px",xs:"20vh"},backgroundSize:{lg:"cover",xs:"contain",sm:"cover"},backgroundRepeat:"no-repeat"}}></Box>
        <Box sx={{display:"flex",flexDirection:{lg:"row",xs:"column"} , justifyContent:"space-between", padding:"20px 60px"}}>
            <Box sx={{display:"flex",flexDirection:"column"}}>
            <Box sx={{padding:"00px 0px"}}>
                   <Typography variant="body1" sx={{ fontSize: { xs: "24px", lg: "34px" }, fontWeight: 600, textAlign:{xs:"center",lg:"left"}}}>The Orbitians</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: "14px", lg: "14px", } ,textAlign:{xs:"center",lg:"left"} ,color:"#858585",fontWeight: 600,}}>Minted on Sept 30 ,2022.</Typography>
                </Box>
                <Box sx={{display:"flex" , justifyContent:"space-between" , flexDirection:{lg:"row",xs:"column" ,padding:"20px 0px"}}}>
                    <Box sx={{display:"flex" , flexDirection:"column",alignItems:{xs:"center",lg:"flex-start"}}}>
                    <Typography variant="body1" sx={{ fontSize: { xs: "18px", lg: "14px", } ,textAlign:{xs:"center",lg:"left"} ,color:"#858585",fontWeight: 600,}}>Created By</Typography>
                    <Box sx={{display:"flex" , gap:1 , alignItems:"center",padding:"8px 0px" }}>
                    <Avatar src='/Avatar Placeholder.png' sx={{ width: "24px", height: "24px", borderRadius: "50%" }}></Avatar>
                        <Typography variant="body1" sx={{ fontSize: "13px" }}>Mr. Fox</Typography>
                    </Box>
                    </Box>
                     </Box>
                     <Box sx={{paddingBottom:"20px"}}>
                     <Typography variant="body1" sx={{ fontSize: { xs: "18px", lg: "14px", } ,textAlign:{xs:"center",lg:"left"} ,color:"#858585",fontWeight: 600,}}>Description</Typography>
                     <Typography variant="body1" sx={{ fontSize: { xs: "15px", lg: "12px", } ,textAlign:{xs:"center",lg:"left"} ,color:"white",width:{lg:"70%",xs:"100%"}}}>The Orbitians
is a collection of 10,000 unique NFTs on the Ethereum blockchain,There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on Earth.
These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</Typography>
                     </Box>
                     <Box sx={{paddingBottom:"20px",flexDirection:"column",display:"flex",alignItems:{lg:"flex-start",xs:"center"}}}>
                     <Typography variant="body1" sx={{ fontSize: { xs: "18px", lg: "14px", } ,textAlign:{xs:"center",lg:"left"} ,color:"#858585",fontWeight: 600,}}>Details</Typography>
                     <Box sx={{display:"flex" , gap:1 , alignItems:"center", }}>
                     <IconButton><LanguageIcon></LanguageIcon></IconButton>
                        <Typography variant="body1" sx={{ fontSize: "14px" }}>View on Ethereum</Typography>
                    </Box>
                    <Box sx={{display:"flex" , gap:1 , alignItems:"center" }}>
                     <IconButton><LanguageIcon></LanguageIcon></IconButton>
                        <Typography variant="body1" sx={{ fontSize: "14px" }}>View original</Typography>
                    </Box>
                     </Box>

            </Box>
            <Box sx={{display:"flex",justifyContent:"center"}}>
            <Box sx={{backgroundColor:"rgba(0,0,0,0.5)" , width:{lg:"400px",xs:"400px"},height:{lg:"200px",xs:"200px"},borderRadius:"14px",marginBottom:{lg:"40px"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
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
            <Button variant="contained" sx={{backgroundColor:"#A259FF",marginTop:"15px"}}>Place your bid</Button>
        </Box>
            </Box>
                </Box>
    </Box>
  )
}
