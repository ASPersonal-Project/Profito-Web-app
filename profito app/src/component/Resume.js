import React from 'react'
import { Typography,Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=> ({
    mainContainer:{
        background: 'grey'
    },
    timeLine:{
        position:'relative',
        padding:'1rem',
        margin:'0 auto',
        "&:before":{
            content: "''",
            position:'absolute',
            height: "100%",
            border: "1px solid white",
            right: "40px",
            top:0
        },
        "&:after":{
            content:"''",
            display: 'table',
            clear:"both"
        }

    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer} >
            <Typography variant="h4" align="center" color="primary">
                Working Experience
            </Typography>
            <Box className={classes.timeLine}>
            <Typography variant="h2" >
                2020
            </Typography>
            </Box>
            
        </Box>
    ) 
}

export default Resume;
