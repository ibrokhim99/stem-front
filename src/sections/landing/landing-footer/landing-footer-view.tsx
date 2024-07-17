'use client';

import Image from 'next/image';

import { Box, Grid, Link, Container, Typography, IconButton } from '@mui/material';

import { Logo } from 'src/components/logo';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#f9f9f9',
      py: 6,
      backgroundImage: 'url(/assets/1991.png), url(/assets/1992.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top right, bottom left',
    }}
  >
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Logo />
          <Typography variant="subtitle1" sx={{ mt: 2, mb: 2, color: 'text.secondary' }}>
            The starting point for your next project with Minimal UI Kit, built on the newest
            version of Material-UI ©.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <IconButton aria-label="Telegram" sx={{ mx: 1, ml: 0, p: 0 }}>
              <Image src="/assets/telegram.png" width={32} height={32} alt="telegram" />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ mx: 1, ml: 0, p: 0 }}>
              <Image src="/assets/instagram.png" width={32} height={32} alt="instagram" />
            </IconButton>
            <IconButton aria-label="Facebook" sx={{ mx: 1, ml: 0, p: 0 }}>
              <Image src="/assets/facebook.png" width={32} height={32} alt="facebook" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Asosiy
          </Typography>
          <Typography variant="body1">
            <Link href="#" color="inherit" underline="none">
              Diagnostik testlar
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link href="#" color="inherit" underline="none">
              Olimpiadalar
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link href="#" color="inherit" underline="none">
              Natijalar
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link href="#" color="inherit" underline="none">
              Puzzle o’yinlar
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Biz bilan aloqa
          </Typography>
          <Typography variant="body1">+998 94 498 22 22</Typography>
          <Typography variant="body1">iqtidorlyio@gmail.com</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Manzil:
          </Typography>
          <Typography variant="body1">
            Toshkent shahar, Navoiy ko’chasi
            <br />
            128-uy, 157-xonadon
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
