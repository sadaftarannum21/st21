import { Box } from '@mui/material';

const MiddleBox = ({ content }) => {
  if (!content) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'primary.light',
        zIndex: 3,
        p: 1,
        boxShadow: 5,
        borderRadius: 3,
        overflow: 'hidden',
        textAlign: 'center',
        maxWidth: 'fit-content',
      }}
    >
      {content}
    </Box>
  );
};

export default MiddleBox;
