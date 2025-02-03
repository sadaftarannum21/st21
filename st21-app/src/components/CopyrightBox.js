import { Box } from '@mui/material';

const CopyrightBox = () => (
  <Box
    sx={{
      alignSelf: 'flex-end',
      fontSize: '0.7rem',
      fontStyle: 'italic',
      color: 'secondary.main',
      marginTop: 'auto',
      paddingRight: 2,
      textAlign: 'right',
    }}
  >
    &copy; 2025 Sadaf Tarannum. All rights reserved.
  </Box>
);

export default CopyrightBox;
