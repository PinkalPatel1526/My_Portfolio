import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <Box 
      sx={{
        bgcolor: '#B4B4B8', 
        py: 3, 
        mt: 'auto', 
        width: '100%',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
        Made with ❤️ by Pinkal Patel
        </Typography>
      </Container>
    </Box>
  );
}
