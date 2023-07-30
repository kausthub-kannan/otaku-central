import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ArticleForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
  };

  return (
    <ThemeProvider theme={defaultTheme}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5" sx={{mt:4}}>
            Write Fan Fiction
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="animeName"
                  required
                  fullWidth
                  id="animeName"
                  label="Anime Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
              <TextField
          id="outlined-multiline-static"
          label="fiction *"
          multiline
          fullWidth
          rows={8}
        />
              </Grid>
              <Grid item xs={6}>
              Season: &nbsp;
              <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>-</Button> 
        <Button >2</Button>
        <Button>+</Button>
      </ButtonGroup>
              </Grid>
              <Grid item xs={6}>
              &nbsp;episode:&nbsp;
              <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>-</Button> 
        <Button>2</Button>
        <Button>+</Button>
      </ButtonGroup>
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Post
            </Button>
           
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}