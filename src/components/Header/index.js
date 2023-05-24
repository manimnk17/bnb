import React from "react";
import Logo from "./logo";
import Search from "./search";
import Cart from "./cart";
import Profile from "./profile";
import Title from "./title";
//import styles from 'react'
//import Nav from "../../layouts/navbar";
export default function index() {
  return (
    <div style={{display: 'flex', justifyContent:'space-between', height: 100, backgroundColor:'white'}} className="ui fixed menu">
        <Title />
        <Logo />
        <div style={{display:'flex', justifyContent:'end', backgroundColor:'white'}}>
        <Search />
        <Cart />
        <Profile />
        </div>
    </div>
  );
}
