import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';

export default function ActionAreaCard(props) {
  return (
    <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.name}
          sx={{ height: '400px', objectFit: 'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{color: 'gold', textAlign: 'center'}}
          >
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.tagline}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
