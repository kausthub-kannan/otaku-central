import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MediaControlCard from "./MediaControlCard";
import Grid from "@mui/material/Grid";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} style={{marginTop:'60px'}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} 
      // style={{position: "fixed",}}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
            <Grid item xs={4}>
              <MediaControlCard />
            </Grid>
          </Grid>
        </Box>

      </CustomTabPanel>
    </Box>
  );
}


