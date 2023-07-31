import React from "react";
import app from "../../App";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import News from "../News/News";
import ProfileInfo from "./PropfileInfo/ProfileInfo";

export type ProfilePropsType = {
    title: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo ava={"ava"}/>
            <MyPosts title={"MyPosts"}/>

        </div>
    )
}

export default Profile;