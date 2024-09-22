import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TitleName from '../extra/TitleName.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box 
          sx={{ 
            height: '100vh', 
            marginTop:  { xs: '55%', sm: '10rem', md: '20%' },
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
          }}
        >
          <Box>
            <TitleName title="Contact Me" />
          </Box>

          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              width: '100%', 
              maxWidth: '600px', 
              mt: '2rem' 
            }}
          >
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              id="subject"
              label="Subject"
              variant="outlined"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              sx={{ 
                mt: '1rem',
                backgroundColor:'#181C14'

              }}
              
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
