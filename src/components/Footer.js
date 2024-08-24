import React from 'react';
import { Box, Typography } from '@mui/material';
// import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Typography variant="h6" sx={{ fontSize: { lg: '15px', xs: '7px' } }} mt="41px" textAlign="center" pb="20px">Made with 🩵 by <a href="https://github.com/Abhishek-yadav-12" target="_blank" rel="noreferrer">Abhishek Yadav</a>
    </Typography>
  </Box>
);

export default Footer;
