import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import ActionAreaCard from './ActionAreaCard';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import UseFormControl from './FormControl';


function App() {

  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  const getSearchedBeer = (search) => {
    setSearch(search);
    console.log(search);
  }

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers${search != ''? `?beer_name=${search}`: ''}`)
      .then(response => response.json())
      .then(data => setBeers(data))
  }, [search]);


  return (
    <Container fixed>
      <h1>cervezas</h1>
      <UseFormControl 
        getSearchedBeer={getSearchedBeer}
      />
      <Grid container spacing={2}>
      {beers.map(beer => {
        return <Grid item xs={6} sm={3} key={beer.id}>        
         <ActionAreaCard
          name={beer.name}
          tagline={beer.tagline}
          image={beer.image_url}
        />
        </Grid>
      })}
      </Grid>
    </Container>
  )
}

export default App
