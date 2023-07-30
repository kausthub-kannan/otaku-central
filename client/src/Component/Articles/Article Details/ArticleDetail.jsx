import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
 
} from "@mui/material";
import Navbar from "../../Navbar";
import SideBar from "../../SideBar";
import ArticleDetailCard from "./ArticleDetailCard";
import ArticleDetailCommentSection from "./Article_Detail_Comment/ArticleDetailCommentSection";


export default function ArticleDetail() {
 

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ margin: 0, padding: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid item xs={1}>
            <SideBar />
          </Grid>

          <Grid item xs={11}>
            {/* ArticleDetails component start         */}

            <Box sx={{ flexGrow: 1 }}>

              <Grid container spacing={2}>
                <Grid item xs={8} sx={{ flexGrow: 1, mt: 8 }}>
                 <ArticleDetailCard  />
                
                </Grid>

                {/* //comment */}
                <Grid item xs={4} style={{ position: "fixed", right: "10px" }}>
                 <ArticleDetailCommentSection />
                </Grid>
                {/* //comment */}

              </Grid>
            </Box>

            {/* ArticleDetail component end         */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
