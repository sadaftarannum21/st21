import { Box } from '@mui/material';

const MiddleBox = ({ content }) => {
  if (!content) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: { xs: '17%', sm: '25%', md: '30%', lg: '39%', xl: '40%' },
        left: '50%',
        transform: {
          xs: 'translate(-50%, -10%)',
          sm: 'translate(-50%, -25%)',
          md: 'translate(-50%, -30%)',
          lg: 'translate(-50%, -25%)',
          xl: 'translate(-50%, -10%)',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'primary.light',
        zIndex: 3,
        p: 1,
        boxShadow: 5,
        borderRadius: 3,
        overflow: 'hidden',
        textAlign: 'center',
        maxWidth: 'fit-content',
        mb: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },

        '@media (orientation: landscape)': {
          top: {
            xs: '17%',
            sm: '39%',
            md: '35%',
            lg: '39%',
            xl: '15%',
          },
        },

        '@media (orientation: portrait)': {
          top: {
            xs: '17%',
            sm: '20%',
            md: '25%',
            lg: '39%',
            xl: '15%',
          },
        },
      }}
    >
      {content}
    </Box>
  );
};

export default MiddleBox;
