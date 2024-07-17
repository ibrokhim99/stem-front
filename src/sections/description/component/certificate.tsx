'use client';

import Image from 'next/image';

import { Box, Button, Typography } from '@mui/material';

const CertificateSection = () => (
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
        Faxriy yorliq hamda <br /> rag’bartlantirish
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1">Farzandingiz olimpiadada qatnashishi osonlashadi</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1">Olimpiada shaffof o’tishi to’liq kafolatlanadi</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
      }}
    >
      <Image
        src="/assets/background/certificate.svg"
        alt="Family"
        width={650}
        height={400}
        style={{ borderRadius: '0 16px 16px 0' }}
      />
    </Box>
  </Box>
);

export default CertificateSection;
