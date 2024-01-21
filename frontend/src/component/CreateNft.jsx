import { Alert, Box, Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import PersonIcon from '@mui/icons-material/Person';
import * as yup from "yup";
import TextFields from './TextFields';
import { useForm } from 'react-hook-form';
import { NFTContext } from '../context/NFTcontext';
import DisplayMessage from './DisplayMessage';



export default function CreateNft() {
  const [loading, setLoading] = React.useState(false);
  const[success,setSuccess]= useState({data:null,code:false,ipfsHash:null});
  const {file, setFile ,createNFT,hash } = useContext(NFTContext);
  const jwtToken = localStorage.getItem("Authorization");
  const schema = yup.object({
    Title: yup.string().required("Please provide a Title"),
    Description: yup.string().required("Please provide a Description"),
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Title: "",
      Description: "",
    },
    resolver: yupResolver(schema)
  })



  const onSubmit = async (data) => {

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append("description", data.Description);
    formData.append("title", data.Title);
    formData.append("jwttoken", jwtToken);

    if (file.type.startsWith("image")) {
      const response = await axios.post('http://localhost:4000/createnft', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response.statusText === "OK" && response.data.data)
      {
        console.log(response);
        setSuccess((prev)=>({...prev,data:response.data.data,code:true,ipfsHash:response.data.ipfs}));
      }
      else{
        setSuccess((prev)=>({...prev,data:response.data.error,code:true,ipfsHash:null}));
      }
      try{
        setLoading(true)
      await createNFT(`ipfs://${response.data.ipfsHash}`)
      setLoading(false);
      }
      catch(error)
      {
        console.log(error);
      }
    }
    setLoading(false);
  }

   function handleFile(e)
   {
    console.log(e);
    console.log(e.target.files[0]); 
    setFile(e.target.files[0]) 
   }
  if (jwtToken && jwtToken.startsWith("Bearer")) {
    return (
<>
<Box sx={{ width: "100%", display: "flex", justifyContent: "center", padding: "20px 0px" }}>
        <Box sx={{ backgroundColor: "#3B3B3B", borderRadius: "12px", width: { lg: "1050px", xs: "350px", sm: "600px" }, height: { lg: "430px", xs: "510px" }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <input type="file" onClick={handleFile} />
              <TextFields control={control} label="Title" name="Title" error={errors}></TextFields>
              <TextFields control={control} label="Description" name="Description" error={errors}></TextFields>

            </Box>
            <Button disabled={loading} variant="contained" type="submit" sx={{ backgroundColor: "#A259FF", marginTop: "15px" }} startIcon={<PersonIcon></PersonIcon>}>Create NFT</Button>
          </form>
        </Box>
      </Box>
              {success.code && <DisplayMessage message={success.data}></DisplayMessage>}
              {loading && <DisplayMessage message="Creating NFT....."></DisplayMessage>}
</>
    )
  }
  else {
    return (
      <Box sx={{ width: "100%",display: "flex", justifyContent: "center", padding: "20px 0px" }}>
        <Alert severity="error">
          You must login/sign up before creating nfts.
        </Alert>
      </Box>
    )
  }

}
