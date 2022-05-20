import React from 'react'
import {useState} from 'react';


function Wallet() {
  const WALLET = {"public": "9eYd9KVRghh+ZO5eioSgXuaCHhupIkQ9PtfGT1aV3RAVlvszUbtcGS6N6RdHHTzzqJ3oTKv6quNluCUT0iYPTQ==",
  "private": "6qUPMl/B+4f9PR7OddjDcNzyS/CN3FOXAK0zmTac7/E=",
  "address": "0x737419271ca9ad0014d3009fd731144237229301"}
  
  async function getBalance() {
    const balance = await fetch('https://testnet.newrl.net:8090/get-balances?balance_type=TOKEN_IN_WALLET&token_code=SAMP&wallet_address=0x737419271ca9ad0014d3009fd731144237229301')
    .then((res) => res.json())
  
  console.log(balance)
  }
  
  return (
    <div>Wallet
      <button onClick={getBalance}>Get Balance</button>
    </div>
  )
}



export default Wallet;
