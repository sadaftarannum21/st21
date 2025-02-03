import { Card } from '@mui/material';

const AboutCardWrapper = ({ children }) => {
  return (
    <Card
      sx={{
        width: 400,
        minHeight: 200,
        padding: 2,
        transition: 'all 0.3s ease',
        boxShadow: 3,
        bgcolor: 'primary.light',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 5,
          transform: 'scale(1.05)',
        },
      }}
    >
      {children}
    </Card>
  );
};

export default AboutCardWrapper;
