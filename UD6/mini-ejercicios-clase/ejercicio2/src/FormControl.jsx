import * as React from 'react';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UseFormControl(props) {

  const [search, setSearch] = React.useState('');

  return (
    <form sx={{ width: '100%', marginTop: '3', }}
      onSubmit={(event) => { event.preventDefault(); props.getSearchedBeer(search)}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="fname"
            variant="outlined"
            label="Introduce el nombre de la cerveza"
            onChange={(e) => setSearch(e.target.value)}
            autoFocus />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'>
            Buscar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}