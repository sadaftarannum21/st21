import { Box } from '@mui/material';
import NavBadge from './NavBadge';

const FooterNavBadge = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '16px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <NavBadge />
    </Box>
  );
};

export default FooterNavBadge;
