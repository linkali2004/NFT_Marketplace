import { FormControl, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function TextFields({ control, label ,error ,name}) {
    return (
        <FormControl fullWidth>
            <Controller name={label} control={control} render={({ field }) => <><TextField error={(error[name])?true:false} size="small" {...field}  placeholder={label} sx={{backgroundColor: "white", borderRadius: "12px 12px 12px 12px",border:0, width: { lg: "50ch", xs: "30ch" } }}></TextField> {error[name]?<small style={{color:"red"}}>{error[name].message}</small>:null}  </> }/>
        </FormControl>
    )
}
