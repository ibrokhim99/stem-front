'use client';

import Image from 'next/image';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Card, Grid, Button, styled, Typography } from '@mui/material';

import ResponsivElement from 'src/components/responsive-element/responsve-element';
import { ViewImage } from 'src/components/responsive-element/responsive-landing-works-view';

const steps = [
  {
    number: '01',
    text: "Ishtirok etish uchun sizga internetga ulangan kompyuter yoki planshet kerak bo'ladi.",
  },
  {
    number: '02',
    text: "Ota-onalar yoki o'qituvchi o'quvchilarni saytda ro'yxatdan o'tkazadi",
  },
  {
    number: '03',
    text: "O'quvchilar web-saytga kirib, olimpiadada qatnashadilar",
  },
];

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {},
}));

const HowItWorksSection = () => (
  <Box
    sx={{
      mt: 10,
      mb: 10,
    }}
  >
    <Text variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
      Qanday qilip olimpiadada qatnashish mumkin?
    </Text>
    <Typography variant="subtitle1" sx={{ mb: 4, textAlign: 'left', color: 'text.secondary' }}>
      5-11 sinf oʻquvchilari uchun fan olimpiadalari uchun Oʻzbekistondagi eng
      <br /> birinchi platforma
    </Typography>
    <Grid container spacing={10} justifyContent="center" sx={{ position: 'relative', mb: 12 }}>
      {steps.map((step, index) => (
        <Grid item xs={12} md={4} key={index} sx={{ zIndex: 10 }}>
          <Card
            sx={{
              height: 255,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#FFFFFF',
              position: 'relative',
              textAlign: 'center',
              p: 2,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: 72,
                fontWeight: 'bold',
                position: 'absolute',
                top: 16,
                left: 16,
                color: '#E0E0E0',
              }}
            >
              {step.number}
            </Typography>
            <Typography variant="body1" sx={{ mt: 8, zIndex: 1 }}>
              {step.text}
            </Typography>
          </Card>
        </Grid>
      ))}
      <Image
        src="/assets/background/brain.svg"
        width={200}
        height={240}
        alt="brain"
        style={{ position: 'absolute', right: 0, top: -90 }}
      />
      <Image
        src="/assets/background/light.svg"
        width={200}
        height={240}
        alt="brain"
        style={{ position: 'absolute', left: 80, bottom: -135 }}
      />
    </Grid>

    <Box
      sx={{
        mt: 6,
        p: 3,
        bgcolor: '#FFF8E1',
        height: 444,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 2,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ flex: 1, zIndex: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
          Hurmatli ota-onalar,
          <br /> hotirjam bo’ling!
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CheckCircleIcon sx={{ color: '#FFAB00', mr: 1 }} />
          <Typography variant="body1">Farzandingiz olimpiadada qatnashishi osonlashadi</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CheckCircleIcon sx={{ color: '#FFAB00', mr: 1 }} />
          <Typography variant="body1">Olimpiada shaffof o’tishi to’liq kafolatlanadi</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CheckCircleIcon sx={{ color: '#FFAB00', mr: 1 }} />
          <Typography variant="body1">
            Farzandingiz sertifikat va esdalik sovg’alari bilan mukofotlanadi
          </Typography>
        </Box>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Ishtirok etish
        </Button>
      </Box>
      <Box
        sx={{
          ml: 2,
          mr: -3,
          mt: 5,
          position: 'relative',
        }}
      >
        <ResponsivElement query="down" end="sm">
          <ViewImage
            src="/assets/images/family.png"
            alt="Family"
            width={650}
            height={400}
            style={{ borderRadius: '0 16px 16px 0' }}
          />
        </ResponsivElement>
      </Box>
    </Box>
  </Box>
);

export default HowItWorksSection;
