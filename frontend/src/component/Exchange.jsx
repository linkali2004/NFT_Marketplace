import { Box, Button, IconButton, TextField } from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import React, { useEffect, useState } from 'react'
import BasicSelect from './Select';
import axios from "axios";
import { UserContext } from '../context/UserContext';

export default function Exchange() {
    const [price,setPrice] = useState(null);
    const [tokenOne,setTokenOne] = useState();
    const [tokenTwo,setTokenTwo] = useState();
    const [currency1, setCurrency1] = React.useState("USD Coin");
    const [currency2, setCurrency2] = React.useState("Chainlink");

    const{currencyAddress} = React.useContext(UserContext);



    async function fetchPrices(one,two)
    {
       const res = await axios.get("http://localhost:3000/tokenPrice" , {
        params:{addressOne:one,addressTwo:two}
       })
       console.log(res.data);
       setPrice(res.data);
    }


    useEffect(()=>{
        console.log(currencyAddress);
       fetchPrices(currencyAddress.One,currencyAddress.Two);
    },[currencyAddress])
    function changeAmount(e)
    {
        console.log({currency1,currency2})
        setTokenOne(e.target.value)
        if(e.target.value && price)
        {
            setTokenTwo((e.target.value * price.ratio).toFixed(2))
        }
        else
        {
            setTokenTwo(0);
        }
    }

  return (
<>
<Box sx={{width:"100%",display:"flex",justifyContent:"center" , padding:"20px 0px"}}>
    <Box sx={{backgroundColor:"#3B3B3B" , borderRadius:"12px",width:{lg:"1050px",xs:"350px",sm:"600px"},height:{lg:"430px",xs:"510px"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"}}>
    <Box sx={{display:"flex",gap:"12px"}}><TextField value={tokenOne} onChange={changeAmount} type='number' variant="outlined" sx={{input:{backgroundColor:"white",borderRadius:"10px"},border:"none",width: {lg:'50ch',xs:"25ch",md:"50ch",sm:"50ch"},}}  size="small" placeholder="Currency 1"/><BasicSelect defaultvalue="USD Coin" currency={currency1} setCurrency={setCurrency1}  name="One" /> </Box>
     <IconButton><ArrowCircleDownIcon sx={{color:"white"}}></ArrowCircleDownIcon></IconButton>
     <Box sx={{display:"flex",gap:"12px"}}><TextField value={tokenTwo}  type='number' variant="outlined" sx={{input:{backgroundColor:"white",borderRadius:"10px"},border:"none",width: {lg:'50ch',xs:"25ch",md:"50ch",sm:"50ch"},}} size="small" placeholder="Currency 2" /><BasicSelect defaultvalue="Chainlink" currency={currency2} setCurrency={setCurrency2}  name = "Two" /></Box>
     <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px", padding: "5px 20px"}}>Swap</Button>
        </Box>
    </Box>
</>

  )
}
