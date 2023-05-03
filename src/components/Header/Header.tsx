import React from "react";
import app, {HeaderLogoType} from "../../App";
import classes from "./Header.module.css";

export type HeaderPropsType = {
    logo: HeaderLogoType
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={props.logo.logo}
                 alt="logo"/>
        </header>
    )
}

export default Header;