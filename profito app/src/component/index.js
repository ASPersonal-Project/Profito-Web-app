import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>({
    particlesCanva:{
        position:"absolute"
    }
}))


const Home = () => {
    const classes = useStyles()
    return (
        <>
           
            {/* <Navbar/> */}
            <Header/>
            <Particles 
                canvasClassName={classes.particlesCanva}
                height="33em"
                params={{
                    particles:{
                        number:{
                            value: 40,
                            density:{
                                enable:true,
                                value_area:900
                            }
                        },
                        shape:{
                           type:'circle' ,
                           stroke:{
                               width:1,
                               color:"red"
                           }
                        },
                        size:{
                            value:6,
                            random: true,
                            anim:{
                                enable:false,
                                speed:10,
                                size_min:0.1,
                                sync:false
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default Home
