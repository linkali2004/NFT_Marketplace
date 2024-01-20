import { Button } from '@mui/material'
import {  useDisconnect, } from 'wagmi'

export default function Account() {

  const { disconnect } = useDisconnect()


  return (
    <div>
      <Button  onClick={() => disconnect()} variant="contained" sx={{backgroundColor:"#A259FF",marginTop:"8px"}}>Disconnect</Button>
    </div>
  )
}

