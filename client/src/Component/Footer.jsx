import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '20vh',
        }}
      >
        
        <Box
          component="footer"
          sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#e3f2fd' }}>
          <Container maxWidth="sm">
            <Typography variant="body1">
              Otaku Central - 2023
            </Typography>
         
          </Container>
        </Box>
      </Box>
  );
}