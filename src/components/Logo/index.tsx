import React from 'react'
import bigLogo from './images/logo.svg'
import smallLogo from './images/logo_small.svg'

interface ImageConfig {
    readonly width: string,
    readonly height: string,
    readonly size: "big" | "small"
}

// const Logo = (props: ImageConfig) => <img className="logo" src={logo} alt="logo" width={props.width} height={props.height}/>;

const Logo = (props: ImageConfig) => (
    <img className="logo" width={props.width} height={props.height} src={props.size === "big" ? bigLogo : smallLogo} alt="KalKom | Twoja ścieżka sukcesu"/>
);

export default Logo;