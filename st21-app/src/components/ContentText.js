import { Typography } from '@mui/material';

const ContentText = () => (
  <Typography
    variant="body2"
    color="secondary.main"
    sx={{
      marginTop: 1,
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: 500,
    }}
  >
    Welcome to my website. <br />
    Here you'll find information about my work. <br />
    Feel free to contact me with any questions.
  </Typography>
);

export default ContentText;
