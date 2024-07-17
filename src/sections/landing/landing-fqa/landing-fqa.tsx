'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Container,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

const FAQSection = () => (
  <Container sx={{ mt: 10, mb: 10 }}>
    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
      Ko’p so’raladigan savollar
    </Typography>
    <Typography variant="subtitle2" sx={{ mb: 4, color: 'text.secondary', textAlign: 'center' }}>
      5-11 sinf oʻquvchilari uchun fan olimpiadalari uchun Oʻzbekistondagi eng birinchi platforma
    </Typography>
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      {[
        'O’quvchilar darslarni qaysi platformalar orqali ko’rishlari mumkin?',
        'Loyihaning o’ziga xosligi nimada?',
        'Loyihaning asosiy maqsadi nima?',
        'Loyiha qachon ish boshlagan?',
        'O’quvchilar darslarni qaysi platformalar orqali ko’rishlari mumkin?',
      ].map((question, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2,
            borderRadius: 2,
            // boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          >
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#f9f9f9', borderRadius: 1 }}>
            <Typography>
              Placeholder text for the answer to . This section can be expanded to provide more
              details.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </Container>
);

export default FAQSection;
