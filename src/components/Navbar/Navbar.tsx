import React from "react";
import classes from "./Navbar.module.css";
import News from "../News/News";
import {NavLink} from "react-router-dom";


export type NavbarPropsType = {
    title: string
}

const Navbar = (props: NavbarPropsType) => {
    return (
        <div className={classes.item}>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/dialogs">Dialogs</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
        </div>
    )
}

export default Navbar;
