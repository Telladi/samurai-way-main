import React from "react";
import {HeaderLogoType} from "../../App";
import classes from "./Header.module.css";

export type HeaderPropsType = {
    logo: HeaderLogoType
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={props.logo.logo}
                 alt="logo"/>
        </header>
    )
}

