import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActionArea from '@mui/material/CardActionArea';
import TitleName from '../extra/TitleName.jsx';
import projectImg from '../../assets/2955425.jpg';


export default function Projects() {
  let [playList, setPlaylist] = useState([
    {
      
      project_name: "HomeHavenly[Airbnb-clone]",
      imageUrl: `${projectImg}`,
      url: "https://homehavenly-airbnb-clone.onrender.com/listing"
    },
    
  ]);

  const handleCardClick = (url) => {
    window.open(url,"_blank")
  };

  return (
    <Container sx={{ marginTop: { xs: '15rem', sm: '10rem', md: '11rem' }, marginBottom: "5rem" }}>
        <TitleName title="Projects" />
      <Grid container spacing={4}>
        
        {playList.map((v, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            
            <Card sx={{marginTop:'4.5rem'}}>
              <CardActionArea onClick={() => handleCardClick(v.url)}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={v.imageUrl}
                  alt={v.project_name}
                />
                <CardContent sx={{ backgroundColor: '#' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'1.3em'}}>
                    {v.project_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  I built this Airbnb clone as a practice project using Express, Bootstrap, and MongoDB to enhance my development skills.
                  </Typography>
                </CardContent>  
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
