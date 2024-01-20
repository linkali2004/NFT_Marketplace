import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Modal, Tab, Tabs, useMediaQuery } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from './Drawer';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import Account from './Account'
import WalletOptions from './WalletOptions';
import { useAccount, useEnsName } from 'wagmi'

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}


export default function Navbar() {
  const { address } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const [value, setValue] = React.useState(0);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );

  const { handleOpen, handleClose, open, loggedIn } = React.useContext(UserContext)

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
  const navigate = useNavigate();
  const { userInfo, setLoggedIn } = React.useContext(UserContext);
  function handleLogout() {
    localStorage.removeItem("Authorization");
    setLoggedIn(false);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ backgroundColor: "#2B2B2B" }}>
            <Typography variant="body1" sx={{ flexGrow: 1, fontFamily: "'Manrope', sans-serif", fontSize: { lg: "24px", xs: "14px", md: "18px", sm: "18px" }, fontWeight: 600 }}>
              <IconButton onClick={() => navigate("/")} ><HouseboatIcon sx={{ color: "#A259FF" }}></HouseboatIcon></IconButton> NFT Marketplace
            </Typography>
            {(isSmallDevice || isMediumDevice) ? (
              <Drawer></Drawer>
            ) : (
              <>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Tabs value={value} id="tabs">
                    <Link to="/marketplace"><Tab label="Marketplace" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(0)} /></Link>
                    <Link to="/rankings"><Tab label="Rankings" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(1)} /></Link>
                    <Tab label="Connect Wallet" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => { setValue(2); handleOpen() }} />
                    <Link to="/createnfts"><Tab label="Create NFT" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(3)} /></Link>
                    {/* <Link to="/exchange"><Tab label="Exchange" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(4)} /></Link> */}
                  </Tabs>
                  {loggedIn ? <Box sx={{ display: "flex", gap: 1, alignItems: "center", cursor: "pointer" }}>
                    <Avatar src='/Avatar Placeholder.png' sx={{ width: "24px", height: "24px", borderRadius: "50%" }}></Avatar>
                    <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px", padding: "5px 20px", height: "80%" }} startIcon={<PersonIcon></PersonIcon>} onClick={handleLogout}>Logout</Button>
                  </Box> : <Link to="/login"> <Button variant="contained" sx={{ backgroundColor: "#A259FF", borderRadius: "12px", padding: "5px 20px", height: "80%" }} startIcon={<PersonIcon></PersonIcon>}>Log here</Button></Link>}
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="body1" sx={{ fontSize: { lg: "28px", xs: "18px" }, fontWeight: 600 }}>
            Connect Your Crypto Wallet
          </Typography>
          <ConnectWallet></ConnectWallet>
          <Typography id="modal-modal-title" variant="body1" sx={{ marginTop: "15px", fontSize: { xs: "12px", lg: "16px" } }}>
            Your Wallet Address: {(address) ? address : null}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}