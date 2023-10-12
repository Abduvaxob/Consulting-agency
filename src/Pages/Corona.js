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
import './Blog.css';
import Corona1 from '../assets/corona2.png'
import Corona2 from '../assets/warnapp.jpg'



const CoronaSection = styled('div')(({ theme }) => ({
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

 function Corona() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CoronaSection>
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
          title="Bundesregierung"
          subheader="Januar 13, 2023"
          className="card__header"
        />
        <CardMedia
          component="img"
          height="150"
          image={Corona1}
          alt="No img"
        className='corona__image' />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Die Maskenpflicht im Fernverkehr wird zum 2. Februar ausgesetzt. 
          Das kündigte Bundesgesundheitsminister Lauterbach an. Die aktuelle Pandemielage lasse es zu, auf 
          Eigenverantwortung und Freiwilligkeit zu setzen.
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
            <Typography paragraph>Maskenpflicht im Fernverkehr entfällt</Typography>
            <Typography paragraph>
            Im Fernverkehr können die Fahrgäste bald wieder ohne Maske reisen.
            </Typography>
            <Typography paragraph>
            Ab 2. Februar entfällt in Zügen und Bussen des Fernverkehrs die Maskenpflicht. 
            „Die Pandemielage hat sich stabilisiert“, sagte Bundesgesundheitsminister Karl Lauterbach in Berlin. 
            Die Inzidenz sei nur noch halb so hoch wie vor einem Monat. 
            Das Abwasser-Monitoring zeige gleichbleibende oder fallende Werte. 
            Zudem ging die Zahl der Hospitalisierungen und Krankenhauseinweisungen zurück. 
            „Die Lage dort ist angespannt, aber beherrschbar“, sagte der Minister.
            </Typography>
            <Typography paragraph>
            Die Bevölkerung habe außerdem eine hohe Immunität aufgebaut und die Experten gingen nicht mehr davon aus, 
            dass es zu einer schweren Winterwelle kommen werde. Darüber hinaus sei momentan nicht abzusehen, 
            dass besonders gefährliche Varianten  in den nächsten Wochen auftreten könnten. 
            (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
            Lauterbach appellierte dennoch an die Bevölkerung, in den Zügen und Innenräumen freiwillig Maske zu tragen. 
            Denn die Pandemie sei noch nicht vorüber. „Wir gehen über in die endemische Lage. 
            Aber jeder, der sich und andere schützen will, ist natürlich weiter gut bedient, die Maske zu tragen - 
            auf der Grundlage von Eigenverantwortung und Freiwilligkeit.“
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
          title="Bundesregierung"
          subheader="Januar 19, 2023"
          className="card__header"
        />
        <CardMedia
          component="img"
          height="150"
          image={Corona2}
          alt="Paella dish"
        className='corona__image' />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Nutzerinnen und Nutzer der Corona-Warn-App können andere User jetzt auch nach einem positiven Selbsttest warnen. 
          Ein Anruf bei der Verifikations-Hotline zur Vergabe von teleTANs nach einem positiven Testbefund ist nicht mehr nötig. 
          Daher wird die Verifikations-Hotline zum 31. Januar 2023 eingestellt.
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
            <Typography paragraph>Mit positivem Selbsttest warnen</Typography>
            <Typography paragraph>
            Mit dem neuen Update der Corona Warn-App können Warnungen nach einem positiven Test 
            selbstständig ausgelöst werden.
            </Typography>
            <Typography paragraph>
            Bisher war für eine Warnung über die Corona-Warn-App ein offizieller positiver Schnell- oder PCR-Test erforderlich. 
            Mit dem aktuellen Update können Nutzerinnen und Nutzer nun mit einem positiven 
            Testergebnis eine Warnung durch die App selbst auslösen. Dies gilt sowohl für positive Ergebnisse von offiziell in 
            Testzentren veranlassten PCR-Tests und Antigen-Schnelltests, die nicht in die App übermittelt wurden, als auch für 
            positive Ergebnisse von sogenannten Point-of-Care-PCR-Tests (PCR-Schnelltests) und von Selbsttests.
            </Typography>
            <Typography paragraph>
            Ein Anruf bei der Verifikations-Hotline zur Vergabe von teleTANs nach einem positiven Testbefund, 
            der nicht in die CWA übermittelt wurde, ist damit nicht mehr nötig. Daher wird der Betrieb der Verifikations-Hotline 
            zum 31. Januar 2023 eingestellt.
            Für die App-Kernfunktionen Risikoermittlung und Risikowarnung ändert sich durch den Wechsel zum TAN-losen 
            Warnverfahren nichts. Die App funktioniert weiter wie gewohnt. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </BlogContainer>
      
    </CoronaSection>
  );
}

export default Corona;