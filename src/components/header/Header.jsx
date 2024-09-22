import '../../styles/banner.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import developerImage from '../../assets/developer_male.png';


export default function Header() {
    return (
        <div className="header-banner">
            <CssBaseline />
            <Container fixed>
                <Box
                    sx={{
                        marginTop: '10%',
                        display: 'flex',
                        alignItems: 'center',
                        height: '50vh',
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', sm: 'row' }
                    }}
                >
                    <Box sx={{ flex: 1, textAlign: 'left', mb: { xs: 2, sm: 0 } }}>
                        <Typography
                            variant="h3"
                            component="h1"
                            sx={{
                                fontFamily: 'Archivo Black, sans-serif',
                                fontSize: { xs: '1.5rem', sm: '2.5rem' }
                            }}
                        >
                            Hii, I am Pinkal,
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontFamily: 'Archivo Black, sans-serif',
                                fontSize: { xs: '1.2rem', sm: '3rem' },
                                color: '#9c74ff',
                            }}
                        >
                            I am a Full Stack Developer
                        </Typography>

                        <Box sx={{ marginTop: "2rem" }}>
                            <Button
                                variant="contained"
                                href="https://drive.google.com/file/d/14-vyJr6LmIhWwk8acMRI-cVUro-hUwPw/view?usp=sharing"
                                sx={{ backgroundColor: '#181C14', marginRight: '1rem' }}
                            >
                                Resume
                            </Button>
                            <Button
                                variant="contained"
                                href="https://www.linkedin.com/in/pinkal1526"
                                startIcon={<LinkedInIcon />}
                                sx={{ backgroundColor: '#0077B5', marginRight: '1rem' }}
                            >
                                
                            </Button>
                            <Button
                                variant="contained"
                                href="https://github.com/PinkalPatel1526"
                                startIcon={<GitHubIcon />}
                                sx={{ backgroundColor: '#333' }}
                            >
                                
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            src={developerImage}
                            alt="Your description"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
