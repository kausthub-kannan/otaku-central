import React, {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


export default function MediaControlCard() {
  const theme = useTheme();
  const [value, setValue] = useState(2);

  return (
    <Card sx={{ display: 'flex', width:'auto', borderRadius:'10px' }}
    //  style={{margin:'20px', width:'30%'}}
     elevation={6}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent style={{}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <br />
        <Rating name="read-only" value={value} readOnly />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        {/* <br /> */}
      
      </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://i.ytimg.com/vi/tcwz3F9-wq8/maxresdefault.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
