import * as React from 'react';
import {Radio, Box,  RadioGroup, FormControlLabel, FormControl, FormHelperText, FormLabel, Button, Card } from '@mui/material';

export default function ErrorRadios() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}  elevation={6}>
        <Card sx={{ maxWidth: 945 }} elevation={8} style={{borderRadius:"20px"}}>
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Which is the best Anime to watch?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="best" control={<Radio />} label="See the documentation below for a complete reference to all of the props " />

          <FormControlLabel value="worst" control={<Radio />} label="See the documentation below for a complete reference to all of the props " />

          <FormControlLabel value="best2" control={<Radio />} label="See the documentation below for a complete reference to all of the props " />

          <FormControlLabel value="worst2" control={<Radio />} label="See the documentation below for a complete reference to all of the props " />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
    </Card>
    </Box>
  );
}
