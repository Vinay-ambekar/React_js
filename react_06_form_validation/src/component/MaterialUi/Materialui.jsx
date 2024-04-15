
import { Box, Button, Container, TextField,Grid} from '@mui/material';
import { useState } from 'react';

function Materialui(){
let [througerror,setthrougerror]=useState(false)

    const submitform=(e)=>{
        e.preventDefault()
        
    }

    return(
        <>
        <h2>Material ui</h2>
    <Container maxWidth='sm'>
    <Box component='form'>
        <Grid container spacing={2} >
             <Grid item xs={12} md={6}>
             <TextField 
                 error={througerror} 
                 type='text' 
                 label='First name' 
                 variant='outlined' 
                 helperText={througerror ? 'Please fill the first name' : ''} 
                 fullWidth
             />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField 
                 error={througerror} 
                 type='text' 
                 label='Last name' 
                 variant='outlined' 
                 helperText={througerror ? 'Please fill the last name' : ''} 
                 fullWidth
             />
             </Grid>
             <Grid item xs={12} md={12}>
             <TextField 
                error={througerror}
                 type='email' 
                 label='email' 
                 variant='outlined'
                 helperText={througerror ? 'Please fill email' : ''} 
                 fullWidth
             />
             </Grid>
             
             <Grid item xs={12}>
             <TextField 
                error={througerror}
                 type='password' 
                 label='password' 
                 variant='outlined'
                 helperText={througerror ? 'Please fill the password' : ''} 
                 fullWidth
             />
             </Grid>
             
             <Grid item xs={12}>
             <Button 
                 variant='contained'
                 sx={{p:'10px',width:'100%'}}
                 onClick={submitform}
             >
                Subimt</Button>
             </Grid>

        </Grid>
    </Box>
    </Container>
        </>
    )
}
export default Materialui;