import { Box, Button, TextField, Typography, Input, FormControl } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useForm, Controller } from "react-hook-form"
import React from 'react'

export default function Login() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
          Username: "",
          Email:"",
          password:"",
          confirmPassword:"",
        },
      })
      const onSubmit = (data) => console.log(data)
  return (
    <Box sx={{width:"100%",display:"flex",flexDirection:{lg:"row",xs:"column"}}}>
        <Box sx={{backgroundImage:"url(/login.png)",width:{lg:"26%",xs:"100%",md:"100%",sm:"100%"},height:"400px",backgroundSize:{xs:"contain",md:"cover",sm:"contain",lg:"contain"},}}></Box>
        <Box sx={{width:{lg:"74%",xs:"100%"},height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:{xs:"20px 0px",lg:"0px 0px"}}}>
            <Typography variant='h4'>Create Account</Typography>
            <Typography variant="body1" sx={{color:"#858585",fontSize:"14px",padding:"6px",textAlign:{xs:"center",lg:"flex-start"}}}>Welcome! enter your details and start creating, collecting and selling NFTs.</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box  sx={{marginTop:"20px" , display:"flex",flexDirection:"column" , gap:"8px"}}>
                      <Controller
                       name="Username"
                        control={control}
                        render={({ field }) => <Input placeholder='Username' sx={{padding:"8px",backgroundColor:"white",borderRadius:"12px 12px 0px 0px",width:{lg:"50ch",xs:"30ch"}}} {...field} />}/>
                         <Controller
                       name="Email"
                        control={control}
                        render={({ field }) => <Input placeholder='Email' sx={{padding:"8px",backgroundColor:"white",borderRadius:"12px 12px 0px 0px",width:{lg:"50ch",xs:"30ch"}}} {...field} />}/>
                         <Controller
                       name="password"
                        control={control}
                        render={({ field }) => <Input placeholder='Password' sx={{padding:"8px",backgroundColor:"white",borderRadius:"12px 12px 0px 0px",width:{lg:"50ch",xs:"30ch"}}} {...field} />}/>
                         <Controller
                       name="confirmPassword"
                        control={control}
                        render={({ field }) => <Input placeholder='Confirm Password' sx={{padding:"8px",backgroundColor:"white",borderRadius:"12px 12px 0px 0px",width:{lg:"50ch",xs:"30ch"}}} {...field} />}/>
       </Box>
        <Button variant="contained" type="submit" sx={{backgroundColor:"#A259FF",marginTop:"15px"}} startIcon={<PersonIcon></PersonIcon>}>Create Account</Button>
       </form>
                
           
        </Box>
    </Box>
  )
}
