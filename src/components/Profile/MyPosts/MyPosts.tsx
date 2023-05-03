import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


export type MyPostType = {
    title: string
}

const MyPosts = (props: MyPostType ) => {
    return (
        <div>
            <button>Add post</button>
            <button></button>
            <div>
                <Post message={"Hi, how are you?"}/>
                <Post message={"It's my first post"}/>
            </div>
        </div>

    )
}

export default MyPosts;