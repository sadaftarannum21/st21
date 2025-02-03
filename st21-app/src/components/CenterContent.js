import { Box, Stack } from '@mui/material';
import servicesData from '../assets/data/servicesData.js';
import ServicesCard from './ServicesCard.js';

const CenterContent = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            title={item.title}
            content={item.content}
            emoji={item.ic}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default CenterContent;
