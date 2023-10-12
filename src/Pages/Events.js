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
import events from '../assets/events.jpg'



const EventsSection = styled('div')(({ theme }) => ({
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

 function Events() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <EventsSection>
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
          subheader="Januar 121, 2023"
          className="card__header"
        />
        <CardMedia
          component="img"
          height="150"
          image={events}
          alt="No img"
        className='corona__image' />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Work and Travel Germany 2023 uchun qabul hali davom etmoqda
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
            <Typography paragraph>O'zingizga kerakli yo'nalishni tanlagandan so'ng bizga ariza qoldiring. Qabul yakunlanganligi
            haqida e'lon bermaganimizcha qabul davom etadi.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      
      </BlogContainer>
      
    </EventsSection>
  );
}

export default Events;