import { Typography } from '@mui/material';

const HeaderSubtitle = () => {
  return (
    <Typography
      variant="body2"
      color="primary.main"
      sx={{
        mb: 2,
        wordBreak: 'break-word',
      }}
      dangerouslySetInnerHTML={{
        __html: `A specialist in data analytics.`,
      }}
    />
  );
};

export default HeaderSubtitle;
