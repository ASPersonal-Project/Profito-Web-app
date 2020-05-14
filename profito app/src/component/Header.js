import React from 'react';
import avatar from '../images/avatar.png';
import { Avatar, Typography,makeStyles,Box,Grid } from '@material-ui/core';
import Typed from 'react-typed';

const useStyle = makeStyles((theme) => ({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin:theme.spacing(1),
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        width:"100vw",
        // border: "1px solid black",
        textAlign:"center",
        zIndex:1
    }
}))

const Header = () => {
    const classes = useStyle();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar src={avatar} alt="bad corwser" className={classes.avatar}/>
            </Grid>
            <Typography variant="h4">
                UOK
            </Typography>
            <br/>
            <Typography variant="h5">
            <Typed
                    strings={['University of Kelaniya']}
                    typeSpeed={80}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header;
