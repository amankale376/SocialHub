import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  large: {
    width: '5rem',
    height: '5rem',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardProfile() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar className={classes.large}></Avatar>}
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Connected with"
      subheader="84 people"

      />
      <CardContent>
      
        <Typography variant="h5" component="h2" gutterBottom>
        Name
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add Friend</Button>
        <Button size="small">Message</Button>
      </CardActions>
    </Card>
    </Container>
  );
}