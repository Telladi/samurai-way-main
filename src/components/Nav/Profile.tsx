import React from "react";
import app from "../../App";

export type ProfilePropsType = {
    title: string
}

const Profile = (props: ProfilePropsType)=>{
    return (
        <div>{props.title}</div>
    )
}

export default Profile;