import { Avatar, Badge, Box, Button, Chip, Grid, IconButton, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Marketplace() {
    const imgNames1 = ["Image Placeholder (8).png", "Explore.png", "explored.png", "page.png", "page1.png", "page2.png", "page3.png", "page4.png", "page5.png"];
    const names = ["Distant Galaxy", "Life on Ednema", "AstroFiction", "CryptoCity", "ColorfulDog02", "Space Tales", "Cherry Blossom Girl 038", "Dancing Robots 0987", "iceCream Ape"];
    const [value,setValue]=useState(0);
    const imgNames2 = ["Image Placeholder (9).png", "Image Placeholder (8).png", "Image Placeholder (7).png", "Image Placeholder (6).png", "Image Placeholder (5).png", "Image Placeholder (4).png", "Image Placeholder (3).png", "Image Placeholder (2).png", "Image Placeholder (1).png"];
    return (
        <>
            <Box sx={{ padding: { lg: "10px 60px", xs: "10px 40px" } }}>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:{xs:"center",lg:"flex-start" , padding:"20px 0px"}}}>
                    <Typography variant="body1" sx={{ fontSize: { xs: "24px", lg: "40px" }, fontWeight: 600, }}>Browse Marketplace</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: "12px", lg: "14px", } ,textAlign:{xs:"center",lg:"left"} }}>Browse through more than 50k+ NFTs on the NFT Marketplace.</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, padding: "20px 0px", flexDirection: { xs: "column", lg: "row" } }}>
                    <TextField variant="outlined" placeholder='Search your NFT' sx={{ input: { color: '#858585' } }} fullWidth size='small' ></TextField>
                    <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px", padding: "5px 20px", width: { lg: "15%", xs: "100%" } }} startIcon={<SearchIcon />}>Search</Button>
                </Box>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: "20px" }}>
                <Tabs value={value} variant="fullWidth">
                    <Tab onClick={()=>setValue(0)} label="NFTs" icon={<Chip label="99+" />} sx={{textTransform:"capitalize",color:'white'}}  iconPosition="end"/>
                    <Tab onClick={()=>setValue(1)} label="Collections" icon={<Chip label="199+" />} sx={{textTransform:"capitalize",color:'white'}} iconPosition="end" />
                </Tabs>
            </Box>
            <br></br>
            {value===0?(<>
                <Grid container rowSpacing={{ xs: 2 }} sx={{ padding: "20px 0px", backgroundColor: "#4d4c4c" }}>
                {imgNames1.map((data, index) => {
                    return (
                        <Grid key={index} item xs={12} md={4} sm={6} lg={4} sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", width: "300px", height: "380px" }}>
                               <Link to = "/nftpage"> <img src={"/" + data} width="300px" height="250px"></img></Link> 
                                <Box sx={{ width: "280px", height: "130px", backgroundColor: "#3B3B3B", padding: "10px", borderRadius: "0px 0px 10px 10px", display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Typography variant="body1" sx={{ fontSize: { xs: "16px", lg: "14px" }, fontWeight: 600 }}>{names.at(index)}</Typography>
                                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                        <Avatar src='/Avatar Placeholder.png' sx={{ width: "24px", height: "24px", borderRadius: "50%" }}></Avatar>
                                        <Typography variant="body1" sx={{ fontSize: "10px" }}>Mr. Fox</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                            <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>Price</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" }}>34.63 ETH</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                            <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>Highest Bid</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" }}>34.63 ETH</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                    )
                })}
            </Grid>
            </>):<>
            <Grid container rowSpacing={{ xs: 2 }} sx={{ padding: "20px 0px", backgroundColor: "#4d4c4c" }}>
                {imgNames2.map((data, index) => {
                    return (
                        <Grid key={index} item xs={12} md={4} sm={6} lg={4} sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", width: "300px", height: "380px" }}>
                               <Link to = "/nftpage"> <img src={"/extra/" + data} width="300px" height="250px"></img></Link> 
                                <Box sx={{ width: "280px", height: "130px", backgroundColor: "#3B3B3B", padding: "10px", borderRadius: "0px 0px 10px 10px", display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Typography variant="body1" sx={{ fontSize: { xs: "16px", lg: "14px" }, fontWeight: 600 }}>{names.at(index)}</Typography>
                                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                        <Avatar src='/Avatar Placeholder.png' sx={{ width: "24px", height: "24px", borderRadius: "50%" }}></Avatar>
                                        <Typography variant="body1" sx={{ fontSize: "10px" }}>Mr. Fox</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                            <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>Price</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" }}>34.63 ETH</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                            <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>Highest Bid</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" }}>34.63 ETH</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                    )
                })}
            </Grid>
            </>}
        </>
    )
}
