//Home.js
import React from 'react'
import SideBar from '../Component/SideBar'
import Navbar from '../Component/Navbar'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BasicTabs from '../Component/BasicTabs';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{margin:0, padding: 0}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11}>
          <BasicTabs/>
        </Grid>
      </Grid>
    </Box>
  )
}

