import { Stack } from '@mui/material';

const StackContainer = ({ children }) => {
  return (
    <Stack
      sx={{
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {children}
    </Stack>
  );
};

export default StackContainer;
