import { Box, Button, TextField, Typography, Input, FormControl } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useForm, Controller } from "react-hook-form"
import React from 'react'
import TextFields from './TextFields';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Login() {
  const schema = yup.object({
    Username:yup.string().required("Username is required"),
    Email:yup.string().required("Email is requird").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , "Please enter a correct email"),
    Password:yup.string().required("Password is required").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password does not match the pattern"),
    ConfirmPassword:yup.string().required("Please confirm your password").oneOf([yup.ref('Password'), null], "Passwords don't match.")
   })

    const { control, handleSubmit,formState:{errors} } = useForm({
        defaultValues: {
          Username: "",
          Email:"",
          Password:"",
          ConfirmPassword:"",
        },
        resolver:yupResolver(schema)
      })


      const onSubmit = (data) => console.log({data}) 
  return (
    <Box sx={{width:"100%",display:"flex",flexDirection:{lg:"row",xs:"column"}}}>
        <Box sx={{backgroundImage:"url(/login.png)",width:{lg:"26%",xs:"100%",md:"100%",sm:"100%"},height:"400px",backgroundSize:{xs:"contain",md:"cover",sm:"contain",lg:"contain"},}}></Box>
        <Box sx={{width:{lg:"74%",xs:"100%"},height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:{xs:"20px 0px",lg:"0px 0px"}}}>
            <Typography variant='h4'>Create Account</Typography>
            <Typography variant="body1" sx={{color:"#858585",fontSize:"14px",padding:"6px",textAlign:{xs:"center",lg:"flex-start"}}}>Welcome! enter your details and start creating, collecting and selling NFTs.</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box  sx={{marginTop:"20px" , display:"flex",flexDirection:"column" , gap:"8px"}}>
                     <TextFields control={control} label="Username" name="Username" error={errors}></TextFields>
                     <TextFields control={control} label="Email"  name="Email" error={errors}></TextFields>
                     <TextFields control={control} label="Password"  name="Password" error={errors}></TextFields>
                     <TextFields control={control} label="ConfirmPassword"  name="ConfirmPassword" error={errors}></TextFields>
                         
       </Box>
        <Button variant="contained" type="submit" sx={{backgroundColor:"#A259FF",marginTop:"15px"}} startIcon={<PersonIcon></PersonIcon>}>Create Account</Button>
       </form>
                
           
        </Box>
    </Box>
  )
}
