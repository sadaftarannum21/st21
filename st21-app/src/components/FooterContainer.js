import { Box } from '@mui/material';

const FooterContainer = ({ children }) => {
  return (
    <Box
      sx={{
        height: { xs: '1%', sm: '1%', md: '1%', lg: '1%', xl: '1%' },
        bgcolor: 'secondary.light',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        zIndex: 2,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        mb: 0,
      }}
    >
      {children}
    </Box>
  );
};

export default FooterContainer;
