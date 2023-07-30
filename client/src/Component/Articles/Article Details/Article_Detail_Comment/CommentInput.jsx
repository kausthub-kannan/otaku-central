import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



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
      <Container component="main" maxWidth="xs" style={{position:"fixed",bottom:0,backgroundColor:"white"}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          style={{ }}
        >
        
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
 
              <TextField
          id="outlined-multiline-static"
          label="fiction *"
          multiline
          fullWidth
          rows={3}
        />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             comment
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}