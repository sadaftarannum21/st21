import { Badge, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBadge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const badgeText = isAboutPage ? 'Land' : 'About';
  const nextRoute = isAboutPage ? '/land' : '/about';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Badge
        badgeContent={badgeText}
        color="primary"
        onClick={() => navigate(nextRoute)}
        sx={{
          fontSize: '0.75rem',
          '& .MuiBadge-badge': {
            padding: '6px 10px',
            fontSize: '0.75rem',
            height: '20px',
            borderRadius: '8px',
            bgcolor: 'primary.main',
            color: 'white',
            whiteSpace: 'nowrap',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
      />
    </Box>
  );
};

export default NavBadge;
