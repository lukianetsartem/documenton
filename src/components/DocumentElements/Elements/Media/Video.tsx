import React from "react";
import {MediaElementProps} from "./Media";

export const Video = (props: MediaElementProps) => {
    const link = `https://www.youtube-nocookie.com/embed/${props.value}`

    return (
        <iframe src={link} frameBorder={0} title={'Video element'}
                allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
                className={'video-element'} allowFullScreen/>
    )
}