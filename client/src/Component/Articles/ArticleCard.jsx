import React, {useState} from 'react';
import {Card, CardHeader, CardContent, CardActions, Avatar, IconButton,Typography, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ArticleCard() {


 const [title, setTitle] = useState('Shrimp and Chorizo Paella');
 const [date, setDate] = useState("September 14, 2016");
 const [fiction, setFiction] = useState("This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.");

  return (
    <Card sx={{ maxWidth: 445 }} elevation={8}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" style={{zIndex:1}}>
            R
          </Avatar>
        }
       
        title={title}
        subheader={date}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {fiction}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{zIndex:1}}/>
        </IconButton>
        <Button size="small">View</Button>

      </CardActions>

    </Card>
  );
}
