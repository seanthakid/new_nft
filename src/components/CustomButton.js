import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
// import {injected} from '../components/wallet/connectors'

const StyledButton = withStyles({ //const is used to define a variable 
    root: { //defining a class CSS code-- this code is styling the button using CSS
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: 'Roboto Condensed',
        fontSize: 18,
        height: "60px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#e1ba8d",
        color: "#00000",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#4f25f7"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


function CustomButton(props) { //a function that allows the button to be called when needed and filled w diff. parameters
  function connect(){

  }  
  return (
      <div>
        <StyledButton onClick={connect} variant="contained">{props.txt}</StyledButton>
        <span>Not Connected</span>
        </div>
    )
}

export default CustomButton