import { Box } from '@mui/material';

const HeaderContainer = ({ children }) => {
  return (
    <Box
      sx={{
        height: { xs: '30%', sm: '35%' },
        bgcolor: 'primary.light',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        zIndex: 2,
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default HeaderContainer;
