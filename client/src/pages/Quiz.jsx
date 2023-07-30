import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../Component/Navbar';
import SideBar from '../Component/SideBar';
import QuizCard from '../Component/Quiz/QuizCard';
import QuizForm from '../Component/Quiz/QuizForm';

export default function Quiz() {
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
        <Grid item xs={12}>
          <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
        <Grid item xs={12}>
        <QuizCard/>
        </Grid>
      </Grid>
    </Box>



        </Grid>
        <Grid item xs={4} style={{position:"fixed", right:"10px"}}>
          <QuizForm  />
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
