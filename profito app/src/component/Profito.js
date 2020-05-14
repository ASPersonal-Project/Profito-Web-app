import React from 'react';
import {Card,CardActionArea,Grid,CardMedia,CardContent,Typography,CardActions,Button, makeStyles} from '@material-ui/core';
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/html-css-javascript.jpg';

const useStyles = makeStyles(()=>({
    root: {
        maxWidth: 345,
        margin:"5rem auto"
      },
}))

const Profito = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container justify="center" alignItems="center">
            <Grid item md={6}>
        <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={project1}
          alt="project 1"
          height="140"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Live demo
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md={6}>
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={project2}
          alt="project 2"
          height="140"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Live demo
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
        </>
    )
}

export default Profito;
