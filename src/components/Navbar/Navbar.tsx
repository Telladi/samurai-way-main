import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export type NavbarPropsType = {
    title: string
}

export const Navbar = (props: NavbarPropsType) => {
    return (
        <div className={s.navbar}>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/dialogs">Dialogs</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
        </div>
    )
}


