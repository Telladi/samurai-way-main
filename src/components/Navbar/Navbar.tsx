import React from "react";
import classes from "./Navbar.module.css";


export type NavbarPropsType = {
    title: string
}

const Navbar = (props: NavbarPropsType) => {
    return (
            <div className={classes.item}>
                <a>{props.title}</a>
            </div>
    )
}

export default Navbar;
