import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsPropsType} from "../../../index";


export type MyPostType = {
    title: string
    posts: PostsPropsType[]
}

const MyPosts = (props: MyPostType) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button> +</button>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>

    )
}

export default MyPosts;