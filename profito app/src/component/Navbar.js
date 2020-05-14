import React,{useState} from 'react';
import {Link } from 'react-router-dom'; 
import {AppBar,Toolbar,IconButton,Typography, Avatar,Box, makeStyles,
  List,ListItem,ListItemIcon,ListItemText,Drawer, Divider} from '@material-ui/core'; 
import {Menu,Home,Apps,AssignmentInd,ContactMail} from '@material-ui/icons';
import avatar from '../images/avatar.png';

const useStyle = makeStyles((theme)=>({
  menuSliderContainer:{
    width:250,
    background:'grey',
    height:'100%'
  },
  avatar:{
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height:theme.spacing(13)
  },
})); 

const menuItems = [
  {listIcon:<Home/>,listText:"Home",listPath:'/'},
  {listIcon:<AssignmentInd/>,listText:"Resume",listPath:'/resume'},
  {listIcon:<Apps/>,listText:"Apps",listPath:'/app'},
  {listIcon:<ContactMail/>,listText:"Contact",listPath:'contact'}
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyle();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  }
  // const toggleSlider = (open) =>{
  //   setOpen(open)
  // } 

  // const slideList = slider => (
    
  // )
  const slideList = () => (
    <Box className={classes.menuSliderContainer} onClick={handleDrawerClose}>
          <Avatar src={avatar} alt="avatar" className={classes.avatar}/>
          <Divider/>
          <List>
            {menuItems.map((listItem,key) => (
               <ListItem button key={key} component={Link} to={listItem.listPath}>
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
        <IconButton edge="start" color="inherit" aria-label="drawe menu" onClick={handleDrawerOpen}>
        <Menu/>
          </IconButton>
          <Typography variant="h6">
           Profito
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
      >
      {slideList()}
        </Drawer>
        
      </>
    )
}

export default Navbar
