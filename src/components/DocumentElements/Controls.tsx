import smile from "../../assets/icons/smile.png";
import picture from "../../assets/icons/picture.png";
import comment from "../../assets/icons/comment.png";
import React from "react";

export const Controls = () => {
    return (
        <div id={'controls'}>
            <div id={'controls-items'}>
                <div id={'add-icon'}>
                    <img alt={'smile-icon'} src={smile}/>
                    <p>Add icon</p>
                </div>
                <div id={'add-cover'}>
                    <img alt={'cover-icon'} src={picture}/>
                    <p>Add cover</p>
                </div>
                <div id={'add-comment'}>
                    <img alt={'comment-icon'} src={comment}/>
                    <p>Add comment</p>
                </div>
            </div>
        </div>
    )
}