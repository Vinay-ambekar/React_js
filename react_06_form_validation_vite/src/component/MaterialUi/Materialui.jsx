
import { Box, Button, Container, TextField,Grid} from '@mui/material';
import { useState } from 'react';

function MaterialUI() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  
    // Combined error state with individual error booleans for better control:
    const [errors, setErrors] = useState({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    });
  
    // Combined error messages for display:
    const [errorMessages, setErrorMessages] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      validateForm();
    };
  
    const validateForm = () => {
      let hasErrors = false; // Flag to track overall validation status
  
      const updatedErrors = { ...errors }; // Create copy to avoid mutation
      const updatedErrorMessages = { ...errorMessages }; // Create copy for error messages
  
      if (formData.firstName.length < 4) {
        hasErrors = true;
        updatedErrors.firstName = true;
        updatedErrorMessages.firstName = 'First Name must be at least 4 characters long.';
      } else {
        updatedErrors.firstName = false;
        updatedErrorMessages.firstName = '';
      }
  
      // Similar validations for other fields
  
      if (formData.lastName.length < 4) {
        hasErrors = true;
        updatedErrors.lastName = true;
        updatedErrorMessages.lastName = 'Last Name must be at least 4 characters long.';
      } else {
        updatedErrors.lastName = false;
        updatedErrorMessages.lastName = '';
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        hasErrors = true;
        updatedErrors.email = true;
        updatedErrorMessages.email = 'Invalid email address.';
      } else {
        updatedErrors.email = false;
        updatedErrorMessages.email = '';
      }
  
      if (formData.password.length < 5) {
        hasErrors = true;
        updatedErrors.password = true;
        updatedErrorMessages.password = 'Password must be at least 5 characters long.';
      } else {
        updatedErrors.password = false;
        updatedErrorMessages.password = '';
      }
  
      setErrors(updatedErrors);
      setErrorMessages(updatedErrorMessages);
  
      // Handle form submission if no errors (optional):
      if (!hasErrors) {
        // Submit form data (e.g., using fetch or an API call)
        console.log('Form submitted with valid data:', formData);
      }
    };
   

    return(
        <>
        <h2>Material ui</h2>
    <Container maxWidth='sm'>
    <Box component='form'>
        <Grid container spacing={2} >
             <Grid item xs={12} md={6}>
             <TextField 
                 error={errors.firstName} 
                 type='text' 
                 label='First Name' 
                 variant='outlined' 
                 helperText={errorMessages.firstName} 
                 fullWidth
                 name='firstName'
                 onChange={handleChange} 
             />
             </Grid>
             <Grid item xs={12} md={6}>
             <TextField 
                 error={errors.lastName} 
                 type='text' 
                 label='Last Name' 
                 variant='outlined' 
                 helperText={errorMessages.lastName} 
                 fullWidth
                 name='lastName'
                 onChange={handleChange}

             />
             </Grid>
             <Grid item xs={12} md={12}>
             <TextField 
                error={errors.email}
                 type='email' 
                 label='email' 
                 variant='outlined'
                 helperText={errorMessages.email} 
                 fullWidth
                 name='email'
                 onChange={handleChange}
             />
             </Grid>
             
             <Grid item xs={12}>
             <TextField 
                error={errors.password}
                 type='password' 
                 label='password' 
                 variant='outlined'
                 helperText={errorMessages.password} 
                 fullWidth
                 name='password'
                 onChange={handleChange}
             />
             </Grid>
             
             <Grid item xs={12}>
             <Button 
                 variant='contained'
                 sx={{p:'10px',width:'100%'}}
                 onClick={handleSubmit}
             >
                Subimt</Button>
             </Grid>

        </Grid>
    </Box>
    </Container>
        </>
    )
}
export default MaterialUI;