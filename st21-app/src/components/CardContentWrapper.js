import { CardContent } from '@mui/material';

const CardContentWrapper = ({ children }) => {
  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      {children}
    </CardContent>
  );
};

export default CardContentWrapper;
