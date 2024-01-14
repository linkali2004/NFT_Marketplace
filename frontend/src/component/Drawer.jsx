import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StorefrontIcon from '@mui/icons-material/Storefront';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Drawer() {
  const {handleOpen} = React.useContext(UserContext)
  const [state, setState] = React.useState({
    left: false,
  });
   const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , margin:0 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Marketplace', 'Rankings', 'Connect Wallet'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index===0?<StorefrontIcon></StorefrontIcon>:(index===1)?<StarBorderPurple500Icon></StarBorderPurple500Icon>:<AccountBalanceWalletIcon></AccountBalanceWalletIcon>}
              </ListItemIcon>
             {(text==="Connect Wallet")?<ListItemText onClick = {handleOpen} primary={text} />:( <ListItemText primary={text} onClick={()=>navigate(`/${text.toLowerCase()}`)} />)}
            </ListItemButton>
          </ListItem>
        ))}
        <Box sx={{display:"flex",justifyContent:"center",marginTop:"15px"}}><Button onClick={ ()=>navigate("/login")}variant="contained" sx={{backgroundColor:"#A259FF" }}>Login</Button></Box>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <MenuIcon />
                    </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}