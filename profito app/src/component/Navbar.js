import React,{useState} from 'react';
import {AppBar,Toolbar,IconButton,Typography, Avatar,Box, makeStyles,List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core'; 
import {ArrowBack,Home,Apps,AssignmentInd,ContactMail} from '@material-ui/icons';
import avatar from '../images/avatar.png';

const useStyle = makeStyles((theme)=>({
  menuSliderContainer:{
    width:250,
    background:'grey',
    height:'30rem'
  },
  avatar:{
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height:theme.spacing(13)
  },
})); 

const menuItems = [
  {listIcon:<Home/>,listText:"Home"},
  {listIcon:<AssignmentInd/>,listText:"Assignment"},
  {listIcon:<Apps/>,listText:"Apps"},
  {listIcon:<ContactMail/>,listText:"Contact"}
]

const Navbar = () => {
  const [state, setState] = useState({right:false})
  const classes = useStyle();

  const togglerSlider = (slider,open) =>{
    setState({...state,[slider]:open})
  } 

  const slideList = slider => (
    <Box className={classes.menuSliderContainer}>
          <Avatar src={avatar} alt="avatar" className={classes.avatar}/>
          <List>
            {menuItems.map((listItem,key) => (
               <ListItem button key={key}>
               <ListItemIcon>{listItem.listIcon}</ListItemIcon>
               <ListItemText primary={listItem.listText} />
             </ListItem>
            ))}
         
      </List>
        </Box>
  )
    return (
      <>
        
        <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="backarrow">
        <ArrowBack/>
          </IconButton>
          <Typography variant="h6">
           Profito
          </Typography>
          
        </Toolbar>
      </AppBar>
      </>
    )
}

export default Navbar
