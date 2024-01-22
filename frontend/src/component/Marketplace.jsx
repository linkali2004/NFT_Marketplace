import { Alert, Avatar, Badge, Box, Button, Chip, Grid, IconButton, InputAdornment, Modal, Tab, Tabs, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {GET_LISTED_NFTS} from "../graphQLqueries/mutations";
import { NFTContext } from '../context/NFTcontext';
import { estimateFeesPerGas } from '@wagmi/core'
import { config } from '../config';

export default function Marketplace() {
    const {loading,error,data , refetch} = useQuery(GET_LISTED_NFTS,{
        pollInterval: 10000
    })
    const [open, setOpen] = useState(false);
    const[ID,setId] = useState("");
    const[gas,setGas] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [listprice ,setListPrice] = useState(0);
    const {buyNFT,unlistNFT} = useContext(NFTContext);

    const imgNames1 = ["Image Placeholder (8).png", "Explore.png", "explored.png", "page.png", "page1.png", "page2.png", "page3.png", "page4.png", "page5.png"];
    const names = ["Distant Galaxy", "Life on Ednema", "AstroFiction", "CryptoCity", "ColorfulDog02", "Space Tales", "Cherry Blossom Girl 038", "Dancing Robots 0987", "iceCream Ape"];
    const [value,setValue]=useState(0);
    const imgNames2 = ["Image Placeholder (9).png", "Image Placeholder (8).png", "Image Placeholder (7).png", "Image Placeholder (6).png", "Image Placeholder (5).png", "Image Placeholder (4).png", "Image Placeholder (3).png", "Image Placeholder (2).png", "Image Placeholder (1).png"];

    async function sellnfthandler()
    {
        handleClose();
        if(ID === "")
        {
            console.log("Price not provided")
            return;
        }
        await buyNFT(Number(ID) ,Number(listprice));
        refetch();
    }

    
    async function unlistnfthandler(e,tokenid)
    {
        if(!tokenid)
        {
            console.log("tokenId not found")
            return;
        }
        await unlistNFT(Number(tokenid));
        refetch();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { lg: 400, xs: 250 },
        backgroundColor: "#3B3B3B",
        boxShadow: 24,
        borderRadius: "14px",
        p: 4,
      };
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
                    <Tab onClick={()=>setValue(0)} label="NFTs" icon={<Chip label={data?.nfts?.length} />} sx={{textTransform:"capitalize",color:'white'}}  iconPosition="end"/>
                    <Tab onClick={()=>setValue(1)} label="Collections" icon={<Chip label="199+" />} sx={{textTransform:"capitalize",color:'white'}} iconPosition="end" />
                </Tabs>
            </Box>
            <br></br>

            {loading && <Alert  severity="warning">Loading.....</Alert>}
            {error && <Alert  severity="error">We encountered an error while loading : {error.message}</Alert>}
            {data?.nfts?.length == 0 && <Alert  severity="warning">Currently there are no nfts for sale</Alert>}
            {data?.nfts?.length &&  (
value == 0?(<>
    <Grid container rowSpacing={{ xs: 2 }} sx={{ padding: "20px 0px", backgroundColor: "#4d4c4c" }}>
    {data.nfts.map((data, index) => {
        return (
            <Grid key={index} item xs={12} md={4} sm={6} lg={4} sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                <Box sx={{ display: "flex", flexDirection: "column", width: "300px", height: "400px" }}>
                   <Link to = "/nftpage"> <img src={data.tokenURI} width="300px" height="200px" crossOrigin='anonymous'></img></Link> 
                    <Box sx={{ width: "280px", height: "200px", backgroundColor: "#3B3B3B", padding: "10px", borderRadius: "0px 0px 10px 10px", display: "flex", flexDirection: "column", gap: 1 }}>
                        <Box sx={{ display: "flex", flexDirection:"column",gap:1 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>Price</Typography>
                                <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" }}>{parseInt(data.price)} Ether</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>Sold By</Typography>
                                <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" }}>{data.from}</Typography>
                            </Box>
                        </Box>
                        <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px" }} onClick={(e)=>{setId(data.id);handleOpen()}}>Buy</Button>
                        <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px" }} onClick={()=>{unlistnfthandler(this,data.id)}}>Unlist</Button>
                    </Box>
                </Box>
            </Grid>

        )
    })}
</Grid>
</>):(
    <>
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
    </>)
)}

<Modal
        open={open}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="body1" sx={{ fontSize: { lg: "28px", xs: "18px" }, fontWeight: 600 }}>
            Enter Price to Buy
          </Typography>
          <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
          <TextField value={listprice} onChange={(e)=>setListPrice(e.target.value)} placeholder='Enter Price' variant='outlined' size ="small"></TextField>
          <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px" }} onClick={(e)=>sellnfthandler()}>Done</Button>
          </Box>
        </Box>
      </Modal>
</>)}
