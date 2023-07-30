import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArticleForm from '../Component/Articles/ArticleForm';
import Navbar from '../Component/Navbar';
import SideBar from '../Component/SideBar';
import ArticleCard from '../Component/Articles/ArticleCard';

export default function Article() {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }} style={{margin:0, padding: 0}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={11}>
  {/* Article component start         */}

  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          

        <Box sx={{ flexGrow: 1, mt:10 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
        <Grid item xs={6}>
        <ArticleCard/>
        </Grid>
      </Grid>
    </Box>



        </Grid>
        <Grid item xs={4} style={{position:"fixed", right:"10px"}}>
          <ArticleForm  />
        </Grid>
      </Grid>
    </Box>





  {/* Article component end         */}
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
