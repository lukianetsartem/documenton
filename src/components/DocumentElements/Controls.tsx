import smile from "../../assets/icons/smile.png";
import picture from "../../assets/icons/picture.png";
import comment from "../../assets/icons/comment.png";
import React, {Dispatch, SetStateAction} from "react";

type Props = {
    isEmojiShown: boolean,
    setIsEmojiShown: Dispatch<SetStateAction<boolean>>
}

export const Controls = (props: Props) => {
    const {isEmojiShown, setIsEmojiShown} = props

    return (
        <div id={'controls'}>
            <div id={'controls-items'}>
                {!isEmojiShown && <div id={'add-icon'}
                                       onClick={() => setIsEmojiShown(true)}>
                    <img alt={'smile-icon'} src={smile}/>
                    <p>Add icon</p>
                </div>}
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