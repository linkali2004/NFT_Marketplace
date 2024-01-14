import { Avatar, Box, Button, Grid, Link, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CreatorPage() {
    const imgNames=["explore.png","Explore.png","explored.png","page.png","page1.png","page2.png","page3.png","page4.png","page5.png"];
    const names=["Distant Galaxy","Life on Ednema","AstroFiction","CryptoCity","ColorfulDog02","Space Tales","Cherry Blossom Girl 038","Dancing Robots 0987","iceCream Ape"];
    return (
        <Box>
            <Box sx={{ backgroundImage: "url('/cover.png')", width: "100%", height: "200px", backgroundSize: "cover" }}></Box>
            <Box sx={{ width: "80px", height: "80px", borderRadius: "12px", backgroundImage: "url('/Artist1.png')", backgroundSize: "cover", position: "relative", top: "-40px", marginLeft: "50px" }}></Box>
            <Box sx={{ padding: { lg: "5px 30px" } }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", lg: "row" }, gap: { xs: 1 } }}>
                    <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "24px", textAlign: { xs: "center" } }}>Anima Kid</Typography>
                    <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                        <Button variant="contained" sx={{ backgroundColor: "#A259FF" }} startIcon={<ContentCopyIcon></ContentCopyIcon>}>{"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266".substring(0,8) + "....." + "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266".substring(40,45)}</Button>
                        <Button variant="outlined" sx={{borderColor:"#A259FF",color: "#A259FF" }} startIcon={<AddIcon></AddIcon>}>Follow</Button>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "50px", marginTop: "20px", justifyContent: { xs: "center", lg: "flex-start" } }}>
                    <Box>
                        <Typography variant="body1" sx={{ fontWeight: "600" }}>240k+</Typography>
                        <Typography variant="body2">Volume</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{ fontWeight: "600" }}>100k+</Typography>
                        <Typography variant="body2">NFTs sold</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{ fontWeight: "600" }}>240k+</Typography>
                        <Typography variant="body2">Followers</Typography>
                    </Box>
                </Box>
                <Box sx={{ marginTop: "15px" }}>
                    <Typography variant="body1" sx={{ fontSize: { xs: "20px", lg: "18px" }, fontWeight: 600, color: "#858585", textAlign: { xs: "center", lg: "left" } }}>Bio</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: "14px", lg: "12px" }, textAlign: { xs: "center", lg: "left" } }}>The internet's friendlist Designer-kid</Typography>
                </Box>
                <Box sx={{ marginTop: "15px" }}>
                    <Typography variant="body1" sx={{ fontSize: { xs: "20px", lg: "18px" }, fontWeight: 600, color: "#858585", textAlign: { xs: "center", lg: "left" } }}>Links</Typography>
                    <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                        <Link href="https://www.facebook.com/" sx={{ color: "#858585" }}>
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ pl: 1, pr: 1, color: "#858585" }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" sx={{ color: "#858585" }}>
                            <Twitter />
                        </Link>
                        <Link href="https://www.linkedin.com/" sx={{ color: "#858585" }}>
                            <LinkedInIcon></LinkedInIcon>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' , marginTop:"20px"  }}>
                <Tabs value={0} variant="fullWidth">
                    <Tab label="Created"  />
                    <Tab label="Owned"  />
                    <Tab label="Collected"  />
                </Tabs>
            </Box>
            <br></br>
            <Grid container  rowSpacing={{xs:2}} sx={{padding:"20px 0px" , backgroundColor:"#4d4c4c"}}>
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
