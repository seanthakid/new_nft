import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core' ;
import { Web3Provider } from "@ethersproject/providers";

import React, { useState } from 'react' ;
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button, IconButton } from '@material-ui/core';
import NavBar from './components/NavBar';
import './App.css';
import gif from "./images/gif.gif";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Borg from './borg.mp4';


// function getLibrary (provider){
//   return new Web3(provider)
// }


function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

document.body.style = 'background: black;';


const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#e1ba8d",
    },
  },
  typography: {
    h1: {
      fontFamily: 'Oswald',
      fontWeight: 1000,
      fontSize: 40,
      lineHeight: '2rem',
    },
    h2: {
      fontFamily: 'Roboto Condensed',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '2rem',
    },
    h3: {
      fontFamily: 'Oswald',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: '5rem',
    },
    h4: {
      fontFamily: 'Roboto Condensed',
      fontWeight: 1000,
      fontSize: 20,
      lineHeight: '.3rem',
    },
  },
});

const styles = makeStyles({
  root: {
  },
  wrapper: {
    display: 'flex',
    margin: "5em",
  },
  leftSide: {
    textAlign: "start",
    width: '50%'
  },
  rightSide: {
    color: "white",
    width: '50%'
  },
  headerRight: {
    textAlign: 'center',
    marginBottom: '25px'
  },
  boxDesign: {
    display: 'flex',
    alignItems: 'center',
    border: '3px gray solid',
    borderRadius: "10px",
    justifyContent: "space-between",
    padding: '11px',
    width: '70%',
    margin: "0 auto"
  },
  boxDesignTwo: {
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    border: '3px gray solid',
    borderRadius: "10px",
    justifyContent: "space-between",
    padding: '11px',
    width: '70%',
    margin: "0 auto",
    background: 'rgba(255, 255, 255, 0.4)'
  },
  buttonCorlor: {
    color: 'white'
  },
  boxDesignThree: {
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    borderTop: '3px gray solid',
    borderBottom: '3px gray solid',
    justifyContent: "space-between",
    padding: '5px',
    width: '72%',
    margin: "0 auto"
  },
  boxDesignFour: {
    marginTop: '15px',
    display: 'flex',
    padding: '5px',
    width: '73%',
    margin: "0 auto"
  },
  buttonStyle: {
    width: "100%",
    marginBottom: "15px"
  },
  boxDesignFive: {
    textAlign: 'center'
  }
})

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}



function App() {
  const classes = styles();
  // const classesMint = stylesMint();
  const [total, setTotal] = useState(1);
  return (
    <Web3ReactProvider getLibrary = {getLibrary}>
    <div>
      <div className = "App">
            <video
            autoPlay
            loop
            muted
            style= {{position: "absolute",
          width: "100%",
          left: "50%",
        top: "50%",
      height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1"
   }}
            >
                <source src= {Borg} type  = "video/mp4"/>
            </video>
        </div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <div className={classes.leftSide}>
            <Typography variant="h1" className={classes.red} color="primary">
              Info
            </Typography>
            <Typography variant="h2" color="secondary">
              December 28th
            </Typography>
            <Typography
              variant="h3" color="primary">
              Limited Mint Date
            </Typography>
            <Typography variant="h4" color="primary">
              December 28 - 5pm EST
            </Typography>
            <Typography variant="h3" color="primary">
              Supply
            </Typography>
            <Typography variant="h4" color="primary">
              777
            </Typography>
            <Typography variant="h3" color="primary">
              Price
            </Typography>
            <Typography variant="h4" color="primary">
              0.08 ETH
            </Typography>
            <Typography variant="h3" color="primary">
              Max
            </Typography>
            <Typography variant="h4" color="primary">
              5 per Wallet
            </Typography>
          </div>
          <div className={classes.rightSide}>
            <Typography variant="h1" className={classes.headerRight} color="primary">
              Limited Sale
            </Typography>
            <Box className={classes.boxDesign}>
              <Box>
                <img src={gif} alt="" width='80px' />
              </Box>
              <Box>
                <Typography color="secondary">
                  Price per NFT
                </Typography>
                <Typography variant="h4" style={{marginTop: '12px'}} color="primary">
                  0.08 ETH Each
                </Typography>
              </Box>
            </Box>
            <Box className={classes.boxDesignTwo}>
              <Box>
                <IconButton onClick={()=>{
                    if (total > 1) {
                      setTotal(total-1)
                    }
                }} 
                aria-label="add" className={classes.buttonCorlor}>
                  <RemoveIcon fontSize="medium" />
                </IconButton>
                {total}
                <IconButton 
                onClick={()=>{
                  if (total < 5) {
                    setTotal(total+1)
                  }
              }} 
                aria-label="add" className={classes.buttonCorlor}>
                  <AddIcon fontSize="medium" />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="h6" color="primary">
                  5 Max
                </Typography>
              </Box>
            </Box>
            <Box className={classes.boxDesignThree}>
              <Box>
              <Typography variant="h6" color="primary">
                  Total
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" color="primary">
                  {total * 0.08} ETH
                </Typography>
              </Box>
            </Box>
            <Box className={classes.boxDesignFour}>
              <Button className={classes.buttonStyle} variant="contained">Mint Now</Button>
            </Box>
            <Box className={classes.boxDesignFive}>
            <Typography variant="h6" color="primary">
                  765 / 777
                </Typography>
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </div>
  </Web3ReactProvider>
  );
}

export default App;
