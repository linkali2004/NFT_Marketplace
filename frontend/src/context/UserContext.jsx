import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserContextProvider = ({children})=>
{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const[loggedIn,setLoggedIn] = useState(false);
    const[userInfo,setUserInfo] = useState([]);
    const [currencyAddress, setCurrencyAddress] = useState({One:"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",Two:"0x514910771af9ca656af840dff83e8264ecf986ca"});
    return(
        <UserContext.Provider value={{handleClose,handleOpen,open,loggedIn,setLoggedIn,setUserInfo,userInfo,currencyAddress,setCurrencyAddress}}>
            {children}
        </UserContext.Provider>
    )
}