import React, {ChangeEvent, useRef, useState} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


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

    const newPostElement = useRef<HTMLTextAreaElement>(null)

const [text, setText]=useState<string>('')



    const onClickHandler = () => {
        if(newPostElement.current)
    props.addPost(newPostElement.current.value)
    }

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/*<textarea onChange={onChangeHandler} value={text}></textarea> */}
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={onClickHandler}>Add post</button>
                <div>
                    {postsElements}
                </div>

            </div>
        </div>

    )
}

