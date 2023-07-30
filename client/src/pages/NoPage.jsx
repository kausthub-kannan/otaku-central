import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function NoPage() {
  return (
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '80vh',
        }}
      >
        <CssBaseline />
        <Container component="main"  maxWidth="lg" style={{marginBottom:'-122px', marginLeft:"500px"}}>
          <img src="https://img.freepik.com/premium-vector/smile-girl-anime-error-404-page-found_150972-827.jpg?w=1060"/>
        </Container>
      </Box>
  );
}