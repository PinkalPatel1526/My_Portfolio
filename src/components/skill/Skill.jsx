import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TitleName from '../extra/TitleName.jsx';
import Typography from '@mui/material/Typography';

export default function Skill() {
  const skills = {
    programmingLanguages: ["Java", "JavaScript", "Python", "HTML/CSS"],
    webTechnologies: ["Node.js", "Express", "React", "Bootstrap"],
    databasesTools: ["MongoDB", "MySQL", "Git & GitHub"],
    coreCompetencies: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems (Unix, Windows)",
      "Database Management System (DBMS)",
      "REST API"
    ],
    librariesFrameworks: ["Passport", "Mongoose", "EJS", "Cloudinary", "Redux"]
  };

  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ height: '50vh', marginTop: { xs: '22rem', sm: '10rem', md: '2rem' } }}>
          <Box>
            <TitleName title="Skills" />
          </Box>

          <Box sx={{ marginTop: '2rem' }}>
            <Typography variant="h6">Programming Languages:</Typography>
            <Typography>{skills.programmingLanguages.join(', ')}</Typography>
          </Box>

          <Box sx={{ marginTop: '1rem' }}>
            <Typography variant="h6">Web Technologies:</Typography>
            <Typography>{skills.webTechnologies.join(', ')}</Typography>
          </Box>

          <Box sx={{ marginTop: '1rem' }}>
            <Typography variant="h6">Databases/Tools:</Typography>
            <Typography>{skills.databasesTools.join(', ')}</Typography>
          </Box>

          <Box sx={{ marginTop: '1rem' }}>
            <Typography variant="h6">Core Competencies:</Typography>
            <Typography>{skills.coreCompetencies.join(', ')}</Typography>
          </Box>

          <Box sx={{ marginTop: '1rem' }}>
            <Typography variant="h6">Libraries/Frameworks:</Typography>
            <Typography>{skills.librariesFrameworks.join(', ')}</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
