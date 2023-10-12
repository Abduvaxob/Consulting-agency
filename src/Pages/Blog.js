import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Important from '../assets/important.png'
import Verbot from '../assets/verbot.png'
import './Blog.css';

const BlogSection = styled('div')(({ theme }) => ({
  backgroundColor: '#E7EBF0',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '20vh',
  [theme.breakpoints.down('md')]:{
    paddingTop: '15vh'
  }
}))

const BlogContainer = styled('div')(({ theme }) => ({
  width: '70vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
   div: {
    marginTop : '10vh',
    boxShadow: 3,
    [theme.breakpoints.down('md')]:{
      marginTop: '5vh'
    }
   }
   
}))


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));    

 function Blog() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <BlogSection>
      <BlogContainer>
        <Card id="blog">
        <CardHeader 
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" className="card_header__avatar">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Abduvakhob Irgashev"
          subheader="Januar 23, 2023"
          className="card__header"
        />
        <CardMedia
          component="img"
          height="150"
          image={Important}
          alt="No image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Ferienjobs - Was ist zu beachten?
          </Typography>
        </CardContent>
        <CardActions disableSpacing className='card__actions'>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse className='card__collapse' in={expanded} timeout="auto" unmountOnExit >
          <CardContent className='card__collapse__content'>
            <Typography paragraph>Wer darf einen Ferienjob annehmen?</Typography>
            <Typography paragraph>
              Voraussetzung ist, dass die Schülerinnen und Schüler mindestens 15 Jahre alt sind.
            </Typography>
            <Typography paragraph>
            Die tägliche Arbeitszeit darf für alle Schülerinnen und Schüler, die 15, aber noch nicht 18 
            Jahre alt sind, nur auf 8 Stunden am Tag und 40 Stunden pro Woche angesetzt sein. Pausen zählen dabei nicht mit.
            Schülerinnen und Schüler dürfen nicht zur Nachzeit (20.00 bis 06.00 Uhr) beschäftigt 
            werden und es muss ihnen Freizeit von mindestens 12 Stunden gewährt bleiben. 
            Für bestimmte Branchen wie Gaststätten, Landwirtschaft, Bäckereien gelten Ausnahmen.
            Die Ruhepausen während der Arbeitszeit müssen mindestens 30 Minuten bei einer 
            täglichen Arbeitszeit von 4,5 bis 6 Stunden und 60 Minuten bei einer täglichen Arbeitszeit von über 6 Stunden betragen.
            Der Ferienjob ist an Samstagen, Sonntagen und Feiertagen verboten.Für Jobbende in z.B. 
            Gaststätten oder Krankenhäusern ist die Ferienarbeit an diesen Tagen zulässig. Dabei gilt: - 
            Mindestens 2 Samstage sollen im Monat beschäftigungsfrei bleiben. - Jeder 2. Sonntag soll 
            beschäftigungsfrei bleiben, mindestens müssen aber 2 Sonntage im Monat beschäftigungsfrei sein Für 
            Feiertage sowie den 24.12. und 31.12. gelten besondere Schutz- und Ausnahmeregeln.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card id="blog">
        <CardHeader 
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" className="card_header__avatar">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Irgashev Abduvakhob"
          subheader="Januar 26, 2023"
          className="card__header"
        />
        <CardMedia
          component="img"
          height="150"
          image={Verbot}
          alt="No image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Was ist verboten beim Sommerjob ?
          </Typography>
        </CardContent>
        <CardActions disableSpacing className='card__actions'>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse className='card__collapse' in={expanded} timeout="auto" unmountOnExit >
          <CardContent className='card__collapse__content'>
            <Typography paragraph>
                Arbeitsschicht (Arbeitszeit und Pause) von mehr als 10 Stunden
                Nachtarbeit zwischen 20.00 und 06.00 Uhr (mit Ausnahmeregelung)
                Samstags-, Sonntags- und Feiertagsarbeit (mit Ausnahmeregelung)
                schwere körperliche Arbeit
                Arbeit mit sittlicher Gefährdung
                gefährliche und gesundheitsschädliche Arbeiten
                Akkordarbeiten (am Fließband und andere tempoabhängige Arbeiten)</Typography>
          </CardContent>
        </Collapse>
      </Card>
      </BlogContainer>
      
    </BlogSection>
  );
}

export default Blog;