import React, { useContext, useState } from 'react'
import {useQuery} from '@apollo/client'
import {GET_NFTS_OWNED_BY_USER} from "../graphQLqueries/mutations";
import { Alert, Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { NFTContext } from '../context/NFTcontext';
function OnlyRenderWhenAuthorized()
{
    const [open, setOpen] = useState(false);
    const[ID,setId] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [listprice ,setListPrice] = useState(0);
    const {loading,error,data , refetch} = useQuery(GET_NFTS_OWNED_BY_USER,{
        pollInterval: 10000
    })
 
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

    console.log(data);
    const {listNFT} = useContext(NFTContext);
    async function sellnfthandler()
    {
        handleClose();
        if(ID === "")
        {
            console.log("Price not provided")
            return;
        }
        await listNFT(Number(ID),Number(listprice));
        refetch();
    }
    if(loading)
    {
        return (
            <Alert  severity="warning">Loading.....</Alert>
        )
    }
    if(error)
    {
        return(
            <Alert  severity="error">Error while loading nfts:{error.message}</Alert>
        )
    }
    if(data)
    {
        return(
            <>
            <Grid container rowSpacing={{ xs: 2 }} sx={{ padding: "20px 0px", backgroundColor: "#4d4c4c" }}>
            {data.nfts.map((data, index) => {
                return (
                    <Grid key={index} item xs={12} md={4} sm={6} lg={4} sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", width: "300px", height: "350px" }}>
                           <Link to = "/nftpage"> <img src={data.tokenURI} width="300px" height="200px" crossOrigin="anonymous"></img></Link> 
                            <Box sx={{ width: "280px", height: "150px", backgroundColor: "#3B3B3B", padding: "10px", borderRadius: "0px 0px 10px 10px", display: "flex", flexDirection: "column", gap: 1 }}>
                                <Box sx={{ display: "flex", flexDirection:"column",gap:1 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>From</Typography>
                                <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" }}>{parseInt(data.from) === 0 ? "Newly Mined":data.from}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>To</Typography>
                                <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" }}>{data.to}</Typography>
                            </Box>
                        </Box>
                                <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px" }} onClick={(e)=>{setId(data.id);handleOpen()}}>Sell</Button>
                            </Box>
                        </Box>
                    </Grid>

                )
            })}
        </Grid>
        <Modal
        open={open}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="body1" sx={{ fontSize: { lg: "28px", xs: "18px" }, fontWeight: 600 }}>
            Enter Price to List
          </Typography>
          <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
          <TextField value={listprice} onChange={(e)=>setListPrice(e.target.value)} placeholder='Enter Price' variant='outlined' size ="small"></TextField>
          <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px" }} onClick={(e)=>sellnfthandler()}>Done</Button>
          </Box>
        </Box>
      </Modal>
        </>
        )
    }
}


export default function UserOwnedNFTs() {
    const token = window.localStorage.getItem("Authorization");
    if(token)
    {
        return(
            <OnlyRenderWhenAuthorized></OnlyRenderWhenAuthorized>
        )
    }
    return(
        <Alert severity='error'>You are not authorized to access this page</Alert>
    )
}
