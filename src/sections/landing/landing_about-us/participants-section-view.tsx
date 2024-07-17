'use client';

import Image from 'next/image';

import { Box, Card, Grid, Typography } from '@mui/material';

import ResponsivElement from 'src/components/responsive-element/responsve-element';

const participants = [
  {
    name: 'Asilbek Odilov',
    location: "Far'ona viloyati Bag'dod tumani 9-sinf o'quvchisi",
    text: "I totally agree with your points here. It's so important to consider all sides of the issue!",
    image: '/assets/images/proud-little-boy.png',
    bgColor: '#D6F1E8',
    textBgColor: '#BCE8DA',
  },
  {
    name: 'Shaxzoda Qodirova',
    location: "Far'ona viloyati Bag'dod tumani 9-sinf o'quvchisi",
    text: "I totally agree with your points here. It's so important to consider all sides of the issue!",
    image: '/assets/images/proud-little-girl.png',
    bgColor: '#E1F5FE',
    textBgColor: '#C5EFF6',
  },
  {
    name: 'Shaxzoda Qodirova',
    location: "Far'ona viloyati Bag'dod tumani 9-sinf o'quvchisi",
    text: "I totally agree with your points here. It's so important to consider all sides of the issue!",
    image: '/assets/images/proud-little.png',
    bgColor: '#FFEBEE',
    textBgColor: '#FFC8BB',
  },
  {
    name: 'Asilbek Odilov',
    location: "Far'ona viloyati Bag'dod tumani 9-sinf o'quvchisi",
    text: "I totally agree with your points here. It's so important to consider all sides of the issue!",
    image: '/assets/images/proud-little-boy.png',
    bgColor: '#FFF8E1',
    textBgColor: '#FFECC5',
  },
];
const ParticipantsSectionView = () => (
  <Box
    sx={{
      mt: 6,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
      Qatnashuvchilar biz haqimizda...
    </Typography>
    <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
      5-11 sinf oʻquvchilari uchun fan olimpiadalari uchun Oʻzbekistondagi eng birinchi platforma
    </Typography>
    <Grid container spacing={3}>
      {participants.map((participant, index) => (
        <Grid item xs={12} md={6} key={index} sx={{ height: 230 }}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              height: '100%',
              p: 2,
              bgcolor: participant.bgColor,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">{participant.name}</Typography>

              <Typography
                variant="body2"
                sx={{ mt: 1, mb: 1, pl: 1, bgcolor: participant.textBgColor, borderRadius: 1 }}
              >
                {participant.location}
              </Typography>

              <br />
              <Typography variant="body2">{participant.text}</Typography>
            </Box>

            <ResponsivElement query="down" end="sm">
              <Box sx={{ ml: 0 }}>
                <Image src={participant.image} alt={participant.name} width={210} height={210} />
              </Box>
            </ResponsivElement>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ParticipantsSectionView;
