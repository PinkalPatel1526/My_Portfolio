import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TitleName from '../extra/TitleName.jsx';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Education() {
    const education = [
        {
            degree: "Bachelor of Computer Application",
            institution: "vidhyadeep University",
            SGPA: 9.15,
            year: " 2022-2025"
        },
        {
            degree: "Certificate in Data Structures and Algorithms",
            institution: "Online Course Provider",
            year: "2022"
        },
        {
            degree: "Certificate in MERN Stack Development",
            institution: "Online Course Provider",
            year: "2023"
        }
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ height: '50vh', marginTop: '14%' }}>
                    <Box>
                        <TitleName title="Education" />
                    </Box>

                    <Box sx={{ marginTop: '2rem' }}>
                        <Box sx={{ marginBottom: '1rem' }}>
                            <Typography variant="h6">Bachelor of Computer Application</Typography>
                            <Typography>vidhyadeep University</Typography>
                            <Typography>SGPA: 10/9.15</Typography>
                            <Typography color="text.secondary">2022-2025</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '2rem' }}>
                        <Box sx={{ marginBottom: '1rem' }}>
                            <Typography variant="h6">Data Structures and Algorithms</Typography>
                            <Typography>Apna college</Typography>
                            <Typography color="text.secondary">2023</Typography>
                            <Typography>
                                <Button sx={{
                                    marginTop:'0.5rem',
                                    backgroundColor:'#181C14'
                                }} variant="contained" href="https://drive.google.com/file/d/1w9IjK6LqvWx8oZsEp7RqEUeaXkVaFJLu/view?usp=sharing">
                                    Certificate
                                </Button>
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '2rem' }}>
                        <Box sx={{ marginBottom: '1rem' }}>
                            <Typography variant="h6">MERN Stack Development</Typography>
                            <Typography>Apna college</Typography>
                            <Typography color="text.secondary">2024</Typography>
                            <Typography>
                                <Button sx={{
                                    marginTop:'0.5rem',
                                    backgroundColor:'#181C14'
                                }} variant="contained" href="https://drive.google.com/file/d/1EPC59UCc-_CHIi3ZJZqvy-crBcGa1AMj/view?usp=sharing">
                                    Certificate
                                </Button>
                            </Typography>   
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
