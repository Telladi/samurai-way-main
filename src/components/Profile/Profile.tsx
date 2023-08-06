import React from "react";
import s from './Profile.module.css'

import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    posts: ProfilePageType
    addPost: (message: string)=>void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={s.content}>

            <div>
                ava + desc
            </div>
            <ProfileInfo ava={"ava"}/>
            <MyPosts  posts={props.posts.posts} addPost={props.addPost}/>

        </div>
    )
}
