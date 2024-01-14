import { Avatar, Badge, Box, Grid, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

export default function Rankings() {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const isMediumDevice = useMediaQuery(
      "only screen and (min-width : 769px) and (max-width : 992px)"
    );
    const names=["Marcus Saries","Alfonso Bator","Nolan Mango","Miracle Gouse","Alena Septimus","Desirae Lipshutz","Paityn Kenter","Alena Vaccaro","Randy Carder","Hanna Culhane","Ahmad Franci","Ryna Caraio"];
    const imgNames=["Artist1.png","Artist2.png","Artist3.png","Artist4.png","Artist5.png","Artist6.png","Artist7.png","Artist8.png","Artist9.png","Artist10.png","Artist11.png","Artist12.png"];
    return (
        <Box sx={{ padding: { lg: "10px 60px", xs: "10px 40px" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", lg: "flex-start", padding: "20px 0px" } }}>
                <Typography variant="body1" sx={{ fontSize: { xs: "24px", lg: "40px" }, fontWeight: 600, }}>Top Creators</Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "12px", lg: "14px", }, textAlign: { xs: "center", lg: "left" } }}>Check out top rated creators on NFT Marketplace.</Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: "20px" }}>
                <Tabs value={0} variant="fullWidth">
                    <Tab label="Today" sx={{ textTransform: "capitalize", color: 'white' }} />
                    <Tab label="This Week" sx={{ textTransform: "capitalize", color: 'white' }} />
                    <Tab label="This Month" sx={{ textTransform: "capitalize", color: 'white' }} />
                    <Tab label="All Time" sx={{ textTransform: "capitalize", color: 'white' }} />
                </Tabs>
            </Box>
            <Grid container sx={{marginTop:"12px"}}>
                {imgNames.map((data,index)=>{
                    return (
                        <Grid key={index} item xs={12} sx={{backgroundColor:"#3B3B3B",padding:"8px" , borderRadius:"17px",marginBottom:"8px"}}>
                        <Grid container>
                            <Grid item xs={2} lg={1} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Box>
                                    <Avatar sx={{ width: "30px", height: "30px", backgroundColor: "#2B2B2B", fontSize: "9px" }}>{index+1}</Avatar>
                                </Box>
                            </Grid>
                            <Grid item xs={7} lg={5}>
                            <Box sx={{display:"flex" , gap:3 , alignItems:"center" }}>
                        <Avatar src={"/"+data} sx={{ width: "50px", height: "50px", borderRadius: "50%" }}></Avatar>
                            <Typography variant="body1" sx={{ fontSize: {lg:"18px",xs:"14px"} }}>{names.at(index)}</Typography>
                        </Box>
                            </Grid>
                            {(isSmallDevice||isMediumDevice)?(<>
                            </>):(<>
                                <Grid item xs={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Typography variant="body1" sx={{ fontSize: "16px" , color:"green" }}>1.51%</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Typography variant="body1" sx={{ fontSize: "16px" }}>602</Typography>
                            </Grid>
                            </>)}
                            <Grid item xs={3} lg={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Typography variant="body1" sx={{ fontSize: "16px" }}>12.4ETH</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}
