import React from "react";
import app, {HeaderLogoType} from "../../App";

export type HeaderPropsType = {
    logo: HeaderLogoType
}

const Header = (props: HeaderPropsType) => {
    return (
        <img src={props.logo.logo}
             alt="logo"/>
    )
}

export default Header;