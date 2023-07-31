import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


export type MyPostType = {
    title: string
}

const MyPosts = (props: MyPostType ) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'Hi, how are you?', likesCount: 22},
        {id: 3, message: 'Hi, how are you?', likesCount: 33},
        {id: 4, message: 'Hi, how are you?', likesCount: 44},
        {id: 5, message: 'Hi, how are you?', likesCount: 55},
    ]

    return (
        <div>
            <button>Add post</button>
            <button> +</button>
            <div>
                <Post message={postData[0].message} likesCount = {postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount = {postData[1].likesCount}/>
                <Post message={postData[2].message} likesCount = {postData[2].likesCount}/>
                <Post message={"It's my first post"}/>
            </div>
        </div>

    )
}

export default MyPosts;