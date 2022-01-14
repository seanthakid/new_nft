import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core'

const Web3 = require('web3');
const web3 = new Web3 ("https://ropsten.infura.io/v3/<API>");

const {active, account, library, connector, activate, deactivate} =useWeb3React ()
const Private_key = "<Private Key>";

async function eth_transaction(){
  var value = web3.utils.toWei('.08','ether')

  var SignedTransaction = await web3.eth.accounts.signTransaction({
    to:'0xA0321c9645e855888D00b32037705B56cBB3a567',
    from: account,
    value: value,
  }, Private_key);

  web3.eth.sendSignedTransaction(SignedTransaction.rawTransaction).then(
    (receipt)=>{
      console.log(receipt);
      console.log("Contract deployed at : ", receipt.contractAddress);
    }
  );
}

eth_transaction();