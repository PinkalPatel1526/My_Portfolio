import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TitleName from '../extra/TitleName.jsx';
import Paragraph from '../extra/Paragraph.jsx';

export default function AboutMe() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box 
          sx={{ 
            height: '50vh', 
            marginTop:  { xs: '25%', sm: '10rem', md: '14%' }
          }}
        >
          <Box>
            <TitleName title="About Me"/>
          </Box>

          <Paragraph text="Hi, I’m Pinkal Patel, a passionate Full Stack Developer with a strong foundation in front-end and back-end technologies. I am currently pursuing my Bachelor's in Computer Applications (BCA) and have been continuously learning and expanding my skill set through practical projects." />
          <Paragraph text="specialize in building web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and have solid experience with REST APIs, Material UI, Bootstrap, and Database Management systems like MySQL and MongoDB. Additionally, I’m well-versed in Data Structures and Algorithms, Object-Oriented Programming, and mobile app development with Kotlin and Java." />
          <Paragraph text="Let’s collaborate and build something awesome together!" />
    
        </Box>
      </Container>
    </React.Fragment>
  );
}
