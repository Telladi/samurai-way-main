import React from "react";
import classes from "./Navbar.module.css";
import News from "../News/News";


export type NavbarPropsType = {
    title: string
}

const Navbar = (props: NavbarPropsType) => {
    return (
            <div className={classes.item}>
                <a href={props.title}>{props.title}</a>
            </div>
    )
}

export default Navbar;
