import React from 'react'
import './styles.css';
import logo from './images/logo.svg';

interface ImageConfig {
    readonly width: string,
    readonly height: string
}

// const Logo = (props: ImageConfig) => <img className="logo" src={logo} alt="logo" width={props.width} height={props.height}/>;

const Logo = (props: ImageConfig) => (
<img className="logo" width={props.width} height={props.height} src={logo} alt="KalKom | Twoja ścieżka sukcesu"/>
);

export default Logo;