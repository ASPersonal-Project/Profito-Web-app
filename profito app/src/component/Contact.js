import React from 'react';
import {makeStyles,Box,Typography,TextField, withStyles,Button} from '@material-ui/core';
import {Send} from '@material-ui/icons';

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color:"white"
        },
        "& label":{
            color:"white"
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"white"
            },
            "&:hover fieldset":{
                borderColor: "green"
            },
            "&.Mui-focused fieldset":{
                borderColor:"white"
            }
        }
    }
})(TextField);

const useStyles = makeStyles((theme)=>({
    form:{
        top:"50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        position:"absolute",
    },
    button:{
        marginTop:"1rem",
        color:"white",
        borderColor:"white"
    }
}))

const Contact = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.form}>
           <Typography variant="h5">
                hire or contact me...
           </Typography>
           <form>
           <InputField  
            fullWidth  
            label="Name" 
            variant="outlined"  
            margin="dense"
            inputProps={{style:{color:"white"}}}
             />
           <InputField  
            fullWidth  
            label="Email" 
            variant="outlined" 
            margin="dense"
            inputProps={{style:{color:"white"}}} 
            />
           <InputField  
            fullWidth  
            label="Company Name" 
            variant="outlined" 
            margin="dense"
            inputProps={{style:{color:"white"}}} 
            />
            <Button className={classes.button} variant="outlined" fullWidth endIcon={<Send/>}>
                contact me
            </Button>

           </form>
           </Box>
        </>
    )
}

export default Contact
