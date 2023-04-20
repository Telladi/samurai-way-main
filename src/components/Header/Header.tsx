import React from "react";


type HeaderPropsType = {
    titleValue: string
}

export function Header(props: HeaderPropsType){
    console.log("Header rendering")
    return (
        <a>{props.titleValue}</a>
    )
}
export default Header;