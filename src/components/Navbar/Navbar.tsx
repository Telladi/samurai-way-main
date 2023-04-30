import React from "react";
import app from "../../App";

export type NavbarPropsType = {
    title: string
}

const Navbar = (props: NavbarPropsType) => {
    return (
        <div>
            <a href="">{props.title}</a>
        </div>
    )
}

export default Navbar;
