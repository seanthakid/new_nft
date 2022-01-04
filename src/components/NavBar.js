import React from 'react'
import CustomButton from './CustomButton'
import nana from '../Cyborg.PNG'
import strawb from '../Cyborg.PNG'
import {Toolbar, Typography} from '@material-ui/core' //importing a toolbar bc react isnt preloaded w/ it 
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({ //styling the NavBar-- makeStyles in diff. form withStlyes (used in button) bc it has to be called in the NavBar function
    bar:{ //a CSS class that is helping define the styles object 
        paddingTop: ".5rem",
        backgroundColor: "#404040",
        height: 70,
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    palette: {
        primary: {
          main:"#FFFFFF",
        },
        secondary: {
          main:"#e1ba8d",
        },
        black: {
            main:"#000000",
          },
    },
nana: {
    width: "4.5%", 
    ['@media (max-width:780px)']: { //media (@media) queries are used to adjust image based on device and broser 
       display: "none"
       }
},
strawb:{
    width: "100%",
    display: "none", 
    ['@media (max-width:780px)']: { 
        display: "inline-block"
        }
},
menuitemLeft: {
    cursor: "pointer", 
    textAlign: "left",
    margin: "3em",
    fontFamily: 'Roboto Condensed',
    flexGrow: 1,
    "&:hover": {
    },
    ['@media (max-width:780px)']: { 
        paddingBottom: "1rem"    }
},
menuitemLeft2: {
    cursor: "pointer", 
    textAlign: "left",
    width: "-200%",
    fontFamily: 'Roboto Condensed',
    flexGrow: 1,
    "&:hover": {
    },
    ['@media (max-width:780px)']: { 
        paddingBottom: "1rem"    }
},
menuitemRight: {
    cursor: "pointer", 
    textAlign: "right",
    margin: "3em",
    fontFamily: 'Roboto Condensed',
    flexGrow: 1,
    "&:hover": {
    },
    ['@media (max-width:780px)']: { 
        paddingBottom: "1rem"    }
}

})

function NavBar() { //putting content into the nav bar 
    const classes = styles() //giving the classes variable the properties from the styles varible/object 
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}> {/* the .bar is calling the bar we defined earlier in stlyes */}   
                <img src={nana} className={classes.nana}/> {/*these images must be in image tags*/}
                <img src={strawb} className={classes.strawb}/> 
                <Typography variant="h6" className={classes.menuitemLeft} color = "primary">
                   Home 
                </Typography>
                <Typography variant="h6" className={classes.menuitemLeft2} color = "secondary">
                    Limited Sale is Live!
                </Typography>
                {/* <Typography variant="h6" className={classes.menuitemLeft} color = "secondary">
                    Limited Sale is Live
                </Typography>
                // <Typography variant="h6" className={classes.menuItem} color = "primary">
                //     Careers
                // </Typography>
                // <Typography variant="h6" className={classes.menuItem} color = "primary">
                //     Demos 
                // </Typography> */}
                <Typography variant="h6" className={classes.menuitemRight} color = "primary">
                     VIEW YOUR COLLECTION
                </Typography >
                <CustomButton txt="Connect Your Wallet"/> {/* this calls the CustomButton funtion and gives it a parameter */}
            </Toolbar>
    )
}
 
export default NavBar

