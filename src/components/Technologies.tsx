import React from "react";

type TechnologiesPropsType = {
    title: string
}
const Technologies=(props: TechnologiesPropsType)=>{
    console.log("Technologies rendering")
    return(
        <h5>{props.title}</h5>
    )
}

export default Technologies;