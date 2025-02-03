import { Box } from '@mui/material';

const FooterContainer = ({ children }) => {
  return (
    <Box
      sx={{
        height: { xs: '10%', sm: '5%' },
        bgcolor: 'secondary.light',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        zIndex: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </Box>
  );
};

export default FooterContainer;
