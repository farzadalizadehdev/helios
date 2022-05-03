import React from "react";
import widelogo from "../../assets/images/wideLogo.svg";
import miniLogo from '../../assets/images/miniLogo.svg'
import './logo.css'
export const Logo = props => {
  return <img className={props.collapsed ? 'logo mini' : 'logo wide'} src={props.collapsed ? miniLogo : widelogo} />;
};
