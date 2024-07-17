'use client';

import Image from 'next/image';

import { Box, Card, Grid, Button, Typography, CardContent } from '@mui/material';

import { paths } from 'src/routes/paths';

export function JwtSignRoleView() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <Box sx={{ width: 348 }}>
          <Card
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CardContent
              sx={{
                textAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: '#FFF5CC',
                  mt: 6,
                }}
              >
                <Image src="/assets/images/student.png" alt="student" width={120} height={120} />
              </Box>

              <Typography variant="h3" sx={{ mt: 7 }}>
                Men o’quvchiman!
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Olimpiada sinovlarida <br />
                qatnashmoqchiman!
              </Typography>
              <Button
                variant="contained"
                href={paths.auth.jwt.signUpStudent}
                color="primary"
                sx={{ m: 2, width: '50%', mt: 6 }}
              >
                Kirish
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ width: 348 }}>
          <Card
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CardContent
              sx={{
                textAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: '#C8FAD6',
                  mt: 6,
                }}
              >
                <Image src="/assets/images/teacher.png" alt="teacher" width={120} height={120} />
              </Box>

              <Typography variant="h3" sx={{ mt: 7 }}>
                Men o’qituvchiman!
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                O’quvchilarim uchun yangi olimpiada <br /> savollari qo’shmoqchiman
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={paths.auth.jwt.signUpTeacher}
                sx={{ m: 2, width: '50%', mt: 6 }}
              >
                Kirish
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
