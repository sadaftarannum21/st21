import { Typography } from '@mui/material';

const EmailLink = ({ email, text }) => {
  return (
    <Typography
      variant="caption"
      color="primary.main"
      sx={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        fontSize: '0.6rem',
        lineHeight: 1.2,
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '90%',
        '&:hover': {
          cursor: 'pointer',
          textDecoration: 'underline',
        },
      }}
    >
      <a
        href={`mailto:${email}`}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        {text}
      </a>
    </Typography>
  );
};

export default EmailLink;
