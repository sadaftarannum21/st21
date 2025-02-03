import { Card, CardContent, Typography } from '@mui/material';

const ServicesCard = ({ title, content, emoji }) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 300 },
        height: 250,
        padding: 2,
        bgcolor: 'primary.light',
        color: 'text.primary',
        boxShadow: 3,
        borderRadius: 2,
        marginBottom: 2,
        '&:hover': {
          boxShadow: 5,
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'primary.main',
            fontWeight: 100,
          }}
        >
          {emoji} {title}
        </Typography>
        <Typography
          variant="body2"
          color="secondary.main"
          sx={{
            fontWeight: 500,
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
