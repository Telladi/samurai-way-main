import React, {ChangeEvent, useRef, useState} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";
import {AddInputForm} from "../../Dialogs/Dialogs";


export type MyPostsPropsType = {
    posts: PostType[]
    addPost: (message: string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {


    const postsElements = props.posts.map(post => <Post
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
        />
    )

    const onClickHandler = (text: string) => {
        props.addPost(text)
    }

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
                <AddInputForm title={"add post"} onClickCallback={onClickHandler}/>
                <div>
                    {postsElements}
                </div>

            </div>
        </div>

    )
}

