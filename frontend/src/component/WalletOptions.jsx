import { Button } from '@mui/material'
import * as React from 'react'
import {  useConnect } from 'wagmi'

export default function WalletOptions() {
  const { connectors, connect } = useConnect()
  console.log(connectors)
  return connectors.map((connector) => (

    connector.id === "io.metamask" ? (  <Button key={connector.uid} onClick={() => connect({ connector })} variant="contained" sx={{backgroundColor:"#A259FF",marginTop:"8px"}}>Connect</Button>):(null)
  ))
}