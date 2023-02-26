import { useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function UserCreate() {

  return (
    <Container maxWidth="xs" sx={{ 
        marginTop:'8',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'}}>
            <Typography sx={{p:5}} component="h1" variant="h5">
                Datos del nuevo usuario:
            </Typography>
                <form sx={{ width:'100%',marginTop:'3',}}
                onSubmit={console.log('Algo')}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstName"
                                variant="outlined"
                                required
                                label="Nombre"
                                onChange={(e)=>setFname(e.target.value)}
                                autoFocus/>
                                {/*...resto de textfields*/}
                        </Grid>
                    </Grid>
                    <Button 
                        type="submit"
                        fullWidth 
                        variant="contained"
                        color="primary"
                        className='submit'>
                        Crear Usuario
                    </Button>
                </form>
    </Container>
  )
}

export default UserCreate;
