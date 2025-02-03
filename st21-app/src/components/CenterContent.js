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
        mt: {
          xs: '10%',
          sm: '5%',
          md: '2%',
          lg: '2%',
          xl: '2%',
        },
        mb: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: {
            xs: 'center',
            sm: 'center',
            md: 'space-evenly',
            lg: 'space-evenly',
            xl: 'space-evenly',
          },
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
          flexWrap: {
            xs: 'nowrap',
            sm: 'nowrap',
            md: 'nowrap',
            lg: 'nowrap',
            xl: 'nowrap',
          },
          alignItems: 'center',
          width: '100%',
        }}
      >
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
