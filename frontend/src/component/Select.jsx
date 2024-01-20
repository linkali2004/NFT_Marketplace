import * as React from 'react';
import {tokenList} from "../../public/tokenlist";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UserContext } from '../context/UserContext';

export default function BasicSelect({defaultvalue,currency,setCurrency, name}) {
    const {currencyAddress,setCurrencyAddress} = React.useContext(UserContext);
  const handleChange = (event) => {
    setCurrency(event.target.value);
    for(let i = 0;i<tokenList.length;i++)
    {
          if(tokenList[i].name === event.target.value)
          {
            setCurrencyAddress((prev)=>({...prev,[name]:tokenList[i].address}))
          }
    }
  };

  return (
      <FormControl sx={{minWidth:"100px"}}>
        <Select
          value={currency}
          defaultValue={defaultvalue}
          onChange={handleChange}
          size='small' 
          sx={{borderRadius:"15px",backgroundColor:"white"}}
        >
            {tokenList.map((data,index)=>{
                return(
                    <MenuItem key = {index} value={data.name}> <img src={data.img} width="20px" height="20px"></img> {data.ticker}</MenuItem>
                )
            })}
        </Select>
      </FormControl>
  );
}