'use client';

import { Box, Card, Button, Avatar, Typography, AvatarGroup } from '@mui/material';

import {
  BoxBanner,
  BannerText,
  BannerTextTwo,
  ResponsiveBannerImage,
} from 'src/components/responsive-element/responsive-banner-view';
// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function BannerView({ title = 'Blank' }: Props) {
  return (
    <Card
      sx={{
        width: '100%',
        height: 663,
        mt: 3,
        mb: 3,
        backgroundColor: '#5BE49B',
        display: 'flex',
        alignItems: 'center',
        padding: 4,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundImage: `url(/assets/Pattern.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ maxWidth: '75%', ml: 3 }}>
        <BannerText variant="h1" sx={{ fontWeight: 'bold', color: '#fff', lineHeight: 1.2 }}>
          Olimpiadalarda qatnashing
          <br />
          va bilimlaringizni oshiring!
        </BannerText>
        <BannerTextTwo variant="h4" sx={{ mt: 6, color: '#fff' }}>
          5-11 sinf oʻquvchilari uchun fan olimpiadalari
          <br />
          uchun Oʻzbekistondagi eng birinchi platforma
        </BannerTextTwo>
        <Button
          variant="contained"
          sx={{
            mt: 6,
            bgcolor: '#fff',
            color: '#5BE49B',
            '&:hover': { bgcolor: '#f0f0f0' },
            width: 163,
          }}
        >
          Kirish
        </Button>
        <BoxBanner
          sx={{
            display: 'flex',
            mt: 10,
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="body2" sx={{ color: '#fff', mr: 1 }}>
            Loyihamizda ishtirok etmoqda:
          </Typography>
          <AvatarGroup max={4}>
            <Avatar alt="Participant 1" src="/assets/participant1.png" />
            <Avatar alt="Participant 2" src="/assets/participant2.png" />
            <Avatar alt="Participant 3" src="/assets/participant3.png" />
            <Avatar alt="Participant 4" src="/assets/participant4.png" />
            <Avatar alt="Participant 5" src="/assets/participant5.png" />
          </AvatarGroup>
        </BoxBanner>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          maxWidth: 663,
          maxHeight: 663,
          width: '100%',
          height: '100%',
          bottom: 0,
          right: 0,
        }}
      >
        <ResponsiveBannerImage
          src="/assets/boy-with-book.png"
          alt="Kid holding books"
          width={663}
          height={663}
        />
      </Box>
    </Card>
  );
}
