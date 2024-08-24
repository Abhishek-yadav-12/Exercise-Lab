import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner1.png';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: '150px', xs: '50px' }, ml: { sm: '50px' } }}
    position="relative"
    p="0"
  >
    <Typography color="#2F2F2F" fontWeight="600" fontSize="26px" mt="0">
      Get Fit with Exercise Lab
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb="23px"
      mt="10px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        className="explore-btn"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#0099a6', // Original background color
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Explore Exercises
      </a>
    </Stack>

    <Typography
      fontWeight={600}
      color="#2F2F2F"
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      width="auto"
      height="auto"
    />
  </Box>
);

export default HeroBanner;
