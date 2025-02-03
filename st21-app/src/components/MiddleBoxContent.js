import { Box, Button, Tooltip } from '@mui/material';
import contactData from '../assets/data/contactData.js';

const MiddleBoxContent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
      {contactData.map(({ title, tip, link, icon }) => (
        <Tooltip key={title} title={tip}>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'secondary.light',
              borderRadius: '12px',
              padding: '2px 2px',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'secondary.dark',
                boxShadow: 6,
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            href={link}
            target="_blank"
            startIcon={icon}
          />
        </Tooltip>
      ))}
    </Box>
  );
};

export default MiddleBoxContent;
