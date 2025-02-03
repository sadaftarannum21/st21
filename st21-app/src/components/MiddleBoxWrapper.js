import { Box } from '@mui/material';

const MiddleBoxWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        height: {
          xs: '7%',
          sm: '25%',
          md: '30%',
          lg: '35%',
          xl: '40%',
        },
        bgcolor: 'primary.light',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        zIndex: 2,
        position: 'relative',
        textAlign: 'center',

        '@media (orientation: landscape)': {
          height: {
            xs: '5%',
            sm: '15%',
            md: '20%',
            lg: '25%',
            xl: '30%',
          },
        },

        '@media (orientation: portrait)': {
          height: {
            xs: '7%',
            sm: '25%',
            md: '30%',
            lg: '35%',
            xl: '40%',
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default MiddleBoxWrapper;
