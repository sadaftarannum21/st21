import { Typography } from '@mui/material';

const HeaderSubtitle = () => {
  return (
    <Typography
      variant="body2"
      color="primary.main"
      sx={{
        mb: { xs: 1, sm: 1.5, md: 2 },
        wordBreak: 'break-word',
        fontSize: {
          xs: '0.875rem',
          sm: '1rem',
          md: '1.125rem',
          lg: '1.135rem',
          xl: '1.150rem',
        },
      }}
      dangerouslySetInnerHTML={{
        __html: `A specialist in data analytics.`,
      }}
    />
  );
};

export default HeaderSubtitle;
