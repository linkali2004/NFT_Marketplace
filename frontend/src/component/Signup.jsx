import { Box, Button, TextField, Typography, Input, FormControl } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useForm, Controller } from "react-hook-form"
import React, { useContext, useState } from 'react'
import TextFields from './TextFields';
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Signup()
{
    const navigate = useNavigate();
    const[loading,setLoading]=React.useState(false);
    const {setLoggedIn,setUserInfo}=useContext(UserContext);
  
    const schema = yup.object({
      Username:yup.string().required("Please provide a username"),
      Email:yup.string().required("Please provider an email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , "Please enter a correct email"),
      Password:yup.string().required("Please provide a password").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password does not match the pattern"),
      ConfirmPassword:yup.string().required("Why forget confirm password").oneOf([yup.ref('Password'), null], "Passwords don't match.")
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
  
  
        const onSubmitSignup = async (data) => {
          if(data.Username === "" || data.Email === "" || data.Password === "" || data.ConfirmPassword === "")
          {
             return 
          }
          setLoading(true);
          const result = await axios({method:"post",
                  url:"http://localhost:3000/api/v1/signup",
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  data:(data)
         })
         setLoading(false);
         setLoggedIn(true);
         console.log(result);
         setUserInfo({...result.result.data.data});
         if(result.status === 200)
         {
          localStorage.setItem("Authorization",`Bearer ${result.data.data.token}`)
           navigate("/");
         }
        }

    return (
        <Box sx={{width:{lg:"74%",xs:"100%"},height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:{xs:"20px 0px",lg:"0px 0px"}}}>
            <Typography variant='h4'>Create Account</Typography>
            <Typography variant="body1" sx={{color:"#858585",fontSize:"14px",padding:"6px",textAlign:{xs:"center",lg:"flex-start"}}}>Welcome! enter your details and start creating, collecting and selling NFTs.</Typography>

            <form onSubmit={handleSubmit(onSubmitSignup)}>
                <Box  sx={{marginTop:"20px" , display:"flex",flexDirection:"column" , gap:"8px"}}>
                     <TextFields control={control} label="Username" name="Username" error={errors}></TextFields>
                     <TextFields control={control} label="Email"  name="Email" error={errors}></TextFields>
                     <TextFields control={control} label="Password"  name="Password" error={errors}></TextFields>
                     <TextFields control={control} label="ConfirmPassword"  name="ConfirmPassword" error={errors}></TextFields>
                         
       </Box>
        <Button disabled={loading} variant="contained" type="submit" sx={{backgroundColor:"#A259FF",marginTop:"15px"}} startIcon={<PersonIcon></PersonIcon>}>Create Account</Button>
       </form>
                
           
        </Box>
    )
}