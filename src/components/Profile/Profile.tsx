import React from "react";
import app from "../../App";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

export type ProfilePropsType = {
    title: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.item}>
            <a  href="">{props.title}</a>
            <MyPosts title={"MyPosts"}/>
        </div>
    )
}

export default Profile;