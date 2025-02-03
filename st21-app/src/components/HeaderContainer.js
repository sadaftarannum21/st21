import { Box } from '@mui/material';

const HeaderContainer = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.light',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        p: 2,
        zIndex: 10,
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
};

export default HeaderContainer;
