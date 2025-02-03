import { Card, CardContent, Typography } from '@mui/material';

const ServicesCard = ({ title, content, emoji }) => {
  return (
    <Card
      sx={{
        width: {
          xs: '90%',
          sm: '85%',
          md: '40%',
          lg: '30%',
          xl: '25%',
        },
        maxWidth: '100%',
        height: 'auto',
        padding: 2,
        bgcolor: 'primary.light',
        color: 'text.primary',
        boxShadow: 3,
        borderRadius: 2,
        marginBottom: { xs: 2, sm: 3, md: 0 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
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
            justifyContent: 'center',
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
