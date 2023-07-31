import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


export type MyPostType = {
    title: string
}

const MyPosts = (props: MyPostType) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'Hi, how are you?', likesCount: 22},
    ]
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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