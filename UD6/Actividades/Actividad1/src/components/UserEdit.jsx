import { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate,  useParams } from 'react-router-dom';

function UserEdit(props) {

    const {id} = useParams();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        fetch(`https://www.melivecode.com/api/users/${id}`)
        .then(response => response.json())
        .then(data => {
            setFname(data.user.fname);
            setLname(data.user.lname);
            setUsername(data.user.username);
            setEmail(data.user.email);
            setAvatar(data.user.avatar);      
        })
      }, []);

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
                                value={fname}
                                onChange={(e)=>setFname(e.target.value)}
                                autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                    name="lname"
                                    variant="outlined"
                                    required
                                    label="Apellido"
                                    value={lname}
                                    onChange={(e)=>setLname(e.target.value)}
                                    />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={username}
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
                                    value={email}
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
                                    value={avatar}
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
                        EDITAR USUARIO
                    </Button>
                </form>
    </Container>
  )
}

export default UserEdit;