import { Typography } from '@mui/material';

const HeaderTitle = () => {
  return (
    <Typography
      variant="h5"
      color="primary.dark"
      sx={{
        fontWeight: 'bold',
        mb: { xs: 0.5, sm: 1, md: 1.5, lg: 2.0, xl: 2.5 },
        wordBreak: 'break-word',
        fontSize: {
          xs: '1.5rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '3rem',
          xl: '3.5rem'
        },
        lineHeight: {
          xs: 1.3,
          sm: 1.4,
          md: 1.5,
          lg: 1.6,
          xl: 1.7,
        },
      }}
      dangerouslySetInnerHTML={{
        __html: `Hey!<br/>I'm Sadaf.`,
      }}
    />
  );
};

export default HeaderTitle;
