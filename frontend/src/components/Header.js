/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./Header.css";
import { Generation_logo } from "../images/_index";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const [toggleOn, setToggleOn] = useState(false);
  const { params } = useParams();

  const toggleBtn = () => {
    if (toggleOn) {
      setToggleOn(false);
    } else {
      setToggleOn(true);
    }
  };

  const toggleBtnOff = () => {
    setToggleOn(false);
  };

  useEffect(() => {
    setToggleOn(false);
    //console.log(params)
    //console.log(toggleOn)
  }, [params]);

  const addMindSmartChain = async () => {
    try {
      // Define your custom network information
      const network = {
        chainId: "0x270C", // Chain ID of the network (9996 in decimal)
        chainName: "Mind Smart Chain",
        nativeCurrency: {
          name: "MIND",
          symbol: "MIND",
          decimals: 18,
        },
        rpcUrls: ["https://rpc-msc.mindchain.info/"],
        blockExplorerUrls: ["https://explorer.mindchain.info/"],
      };
  
      // Check if the network is already added
      const isNetworkAdded = await checkNetworkAdded(network.chainId);
  
      if (isNetworkAdded) {
        console.log("Mind Smart Chain is already added to MetaMask");
        return;
      }
  
      // Add the network to MetaMask
      const result = await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [network],
      });
  
      console.log("Mind Smart Chain added successfully!", result);
    } catch (error) {
      console.error("Failed to add Mind Smart Chain:", error);
    }
  };
  
  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#f7931a',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const iconStyles = {
    marginRight: '8px',
    width: '20px',
    height: '20px',
  };
  

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            style={{ width: 210, height: 36 }}
            alt="Generation"
            src={Generation_logo}
            onClick={() => toggleBtnOff()}
          ></img>
        </Link>
      </div>
      <ul className="navBar">
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/blocks" style={{ textDecoration: "none" }}>
            <h1>Blocks</h1>
          </Link>
        </li>
        <li>
          <Link to="/txs" style={{ textDecoration: "none" }}>
            <h1>Txs</h1>
          </Link>
        </li>
        <li>
          <Link to="/charts" style={{ textDecoration: "none" }}>
            <h1>Charts</h1>
          </Link>
        </li>
        <li>
          <h2>|</h2>
        </li>
        <li>
        <button style={buttonStyles} onClick={addMindSmartChain}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
        alt="MetaMask Icon"
        style={iconStyles}
      />
      Add MSC to MetaMask
    </button>
        </li>
      </ul>

      {/* toggle button menu */}
      {toggleOn ? (
        <ul className="navBar_On">
          <li onClick={() => toggleBtnOff()}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>Home</h1>
            </Link>
          </li>
          <li onClick={() => toggleBtnOff()}>
            <Link to="/blocks" style={{ textDecoration: "none" }}>
              <h1>Blocks</h1>
            </Link>
          </li>
          <li onClick={() => toggleBtnOff()}>
            <Link to="/txs" style={{ textDecoration: "none" }}>
              <h1>Txs</h1>
            </Link>
          </li>
          <li onClick={() => toggleBtnOff()}>
            <Link to="/charts" style={{ textDecoration: "none" }}>
              <h1>Charts</h1>
            </Link>
          </li>
        </ul>
      ) : null}
      <div className="navBar_toggle" onClick={() => toggleBtn()}>
        <h3 className="network">Leo</h3>
        <GiHamburgerMenu size={30} />
      </div>
    </header>
  );
};

export default Header;
