import { Typography } from '@mui/material';

const HeaderTitle = () => {
  return (
    <Typography
      variant="h4"
      color="primary.dark"
      sx={{
        fontWeight: 'bold',
        mb: 1,
        wordBreak: 'break-word',
      }}
      dangerouslySetInnerHTML={{
        __html: `Hey!<br/>I'm Sadaf.`,
      }}
    />
  );
};

export default HeaderTitle;
