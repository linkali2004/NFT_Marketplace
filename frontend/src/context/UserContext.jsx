import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserContextProvider = ({children})=>
{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <UserContext.Provider value={{handleClose,handleOpen,open}}>
            {children}
        </UserContext.Provider>
    )
}