import React from "react";
import {MediaElementProps} from "./Media";

export const Picture = (props: MediaElementProps) => {
    return (
        <img className={'picture-element'} alt={''} src={props.value}/>
    )
}