import { useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function UserCreate(props) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    const navigate = useNavigate();

    function getData(){
        return {
            id:props.id,
            fname:fname,
            lname:lname,
            username:username,
            email:email,
            avatar:avatar,
        }
    }

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
                onSubmit={(event) =>{event.preventDefault(); props.newUser(getData()), navigate(-1)}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="fname"
                                variant="outlined"
                                required
                                label="Nombre"
                                onChange={(e)=>setFname(e.target.value)}
                                autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                    name="lname"
                                    variant="outlined"
                                    required
                                    label="Apellido"
                                    onChange={(e)=>setLname(e.target.value)}
                                    />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Nombre de usuario"
                                    onChange={(e)=>setUsername(e.target.value)}
                                    />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                    name="email"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                    name="avatar"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Avatar"
                                    onChange={(e)=>setAvatar(e.target.value)}
                                    />
                        </Grid>
                    </Grid>
                    <Button
                        sx={{mt:3, mb:2}}
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
