import React from 'react'
import { Grid, Box } from '@mui/material';

const ExerciseDetail = () => {
  return (
    <>
      <Box container spacing={2} sx={{ maxWidth: 1440, fontSize: 0 }}>
        <Box
          item
          xs={12}
          sm={6}
          sx={{
            backgroundImage: `url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-ori-sin.jpg')`,
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%)",
          }}
        ></Box>
        <Grid
          item
          xs={6}
          sx={{
            backgroundImage: `url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/re7-chris-large.jpg')`,
            clipPath: "polygon(0 14%, 0 86%, 90% 81%, 100% 6%)",
            marginTop: -73,
          }}
        ></Grid>
        <Grid
          item
          xs={6}
          sx={{
            backgroundImage: `url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/bioshock-large.jpg')`,
            clipPath: "polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%)",
            marginTop: -73,
            marginLeft: "-15%",
            marginBottom: 18,
          }}
        ></Grid>
      </Box>
    </>
  );
}

export default ExerciseDetail