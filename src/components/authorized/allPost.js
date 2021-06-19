import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: '100%',
      paddingTop: '56.25%', // 16:9
    },
    card:{
        marginTop:'0.7rem',
        height:'170%',
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));

function  AllPost(){
    const classes = useStyles();
    return <>
    <Container maxWidth="md">
        <Grid container spacing={1}>

        <Grid item xs={4}>
        <Card className={classes.card}>
    <CardMedia
        className={classes.media}
        image="https://www.ikea.com/in/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg"
        title="Paella dish"
      />
    </Card>

        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
    <CardMedia
        className={classes.media}
        image="https://www.ikea.com/in/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg"
        title="Paella dish"
      />
    </Card>

        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
    <CardMedia
        className={classes.media}
        image="https://www.ikea.com/in/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg"
        title="Paella dish"
      />
    </Card>

        </Grid>
    </Grid>
    </Container>
    </>
}

export default AllPost;