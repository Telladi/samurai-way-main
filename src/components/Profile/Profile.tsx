import React, {useState} from "react";
import app from "../../App";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import News from "../News/News";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {PostsPropsType} from "../../index";

export type ProfilePropsType = {
    title: string
    posts: PostsPropsType[]
}


const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo ava={"ava"}/>
            <MyPosts title={"MyPosts"} posts={props.posts}/>

        </div>
    )
}

export default Profile;