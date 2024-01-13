import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs, useMediaQuery } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from './Drawer';

export default function Navbar() {
  const[value,setValue] = React.useState(0);
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const isMediumDevice = useMediaQuery(
      "only screen and (min-width : 769px) and (max-width : 992px)"
    );
    const isLargeDevice = useMediaQuery(
      "only screen and (min-width : 993px) and (max-width : 1200px)"
    );
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{backgroundColor:"#2B2B2B"}}>
          <Typography variant="body1" sx={{ flexGrow: 1 , fontFamily:"'Manrope', sans-serif",fontSize:{lg:"24px",xs:"14px",md:"18px",sm:"18px"} }}>
            NFT Marketplace
          </Typography>
          {(isSmallDevice || isMediumDevice)?(
               <Drawer></Drawer>
          ):(
            <>
            <Box sx={{display:"flex" , gap:2}}>
            <Tabs value = {value} id="tabs">
                   <Tab label="Marketplace" sx={{textTransform:"capitalize",color:'white'}} onClick={()=>setValue(0)}/>
                   <Tab label="Rankings" sx={{textTransform:"capitalize",color:'white'}} onClick={()=>setValue(1)}/>
                   <Tab label="Connect Wallet" sx={{textTransform:"capitalize",color:'white'}} onClick={()=>setValue(2)}/>
               </Tabs>
            <Button variant = "contained" sx={{backgroundColor:"#A259FF" , borderRadius:"12px" , padding:"5px 20px"}} startIcon={<PersonIcon></PersonIcon>}>Sign up</Button>
            </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}