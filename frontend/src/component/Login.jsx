import { Box, Button, TextField, Typography, Input, FormControl } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useForm, Controller } from "react-hook-form"
import React, { useContext, useState } from 'react'
import TextFields from './TextFields';
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { redirect, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Signup from "./Signup";

export default function Login() {
  const navigate = useNavigate();
  const[loading,setLoading]=React.useState(false);
  const[decision,setDecison]=useState("login");
  const {setLoggedIn,setUserInfo}=useContext(UserContext);

  const schema = yup.object({
    Username:yup.string().required("Please provide a username"),
    Password:yup.string().required("Please provide a password"),
   })

    const { control, handleSubmit,formState:{errors} } = useForm({
        defaultValues: {
          Username: "",
          Password:"",
        },
        resolver:yupResolver(schema)
      })

      const onSubmitLogin = async (data)=>{
        console.log(data);
        setLoading(true);
        let temp = {...data};
        const transformedData = {Username:temp.Username,Password:temp.Password}
        const result = await axios({method:"post",
                url:"http://localhost:3000/api/v1/login",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data:(transformedData)
       })
       setLoading(false);
       setLoggedIn(true);
       if(result.status === 200 || result.statusText === "OK")
       {
           localStorage.setItem("Authorization",`Bearer ${result.data.data.token}`)
           navigate("/");
       }
      }
  return (
    <Box sx={{width:"100%",display:"flex",flexDirection:{lg:"row",xs:"column"}}}>
        <Box sx={{backgroundImage:"url(/login.png)",width:{lg:"26%",xs:"100%",md:"100%",sm:"100%"},height:"400px",backgroundSize:{xs:"contain",md:"cover",sm:"contain",lg:"contain"},}}></Box>
        <Box sx={{width:{lg:"74%",xs:"100%"},height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Box sx={{display:'flex',gap:1,marginTop:(decision==="login")?"25px":"12px" }}>
          <Button variant="contained" sx={{backgroundColor:"#A259FF"}} onClick={()=>setDecison("login")}>Login</Button>
          <Button variant="contained" sx={{backgroundColor:"#A259Ff"}} onClick={()=>setDecison("signup")}>Sign Up</Button>
        </Box>
        {decision==="login"?(
                  <Box sx={{width:{lg:"74%",xs:"100%"},height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:{xs:"20px 0px",lg:"0px 0px"}}}>
                  <Typography variant='h4'>Login to your account</Typography>
                  <Typography variant="body1" sx={{color:"#858585",fontSize:"14px",padding:"6px",textAlign:{xs:"center",lg:"flex-start"}}}>Welcome! enter your details and start creating, collecting and selling NFTs.</Typography>
      
                  <form onSubmit={handleSubmit(onSubmitLogin)}>
                      <Box  sx={{marginTop:"20px" , display:"flex",flexDirection:"column" , gap:"8px"}}>
                           <TextFields control={control} label="Username" name="Username" error={errors}></TextFields>
                           <TextFields control={control} label="Password"  name="Password" error={errors}></TextFields>
                               
             </Box>
              <Button disabled={loading} variant="contained" type="submit" sx={{backgroundColor:"#A259FF",marginTop:"15px"}} startIcon={<PersonIcon></PersonIcon>}>Login</Button>
             </form>
                      
                 
              </Box>
        ):(      <Signup/>  )}
        </Box>
    </Box>
  )
}
