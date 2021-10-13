import smile from "../../assets/icons/smile.png";
import picture from "../../assets/icons/picture.png";
import comment from "../../assets/icons/comment.png";
import React, {Dispatch, SetStateAction} from "react";
import yellow from "../../assets/backgrounds/collors/yellow.png";

type Props = {
    isEmojiShown: boolean,
    isCover: boolean,
    setIsEmojiShown: Dispatch<SetStateAction<boolean>>,
    setIsCover: Dispatch<SetStateAction<boolean>>,
    setCover: Dispatch<SetStateAction<string>>,
}

export const Controls = (props: Props) => {
    const {setCover, isEmojiShown, setIsEmojiShown, isCover, setIsCover} = props

    return (
        <div id={'controls'}>
            <div id={'controls-items'}>
                {!isEmojiShown && <div id={'add-icon'}
                                      onClick={() => {
                                          setIsEmojiShown(true)
                                      }}>
                    <img alt={'add-icon'} src={smile}/>
                    <p>Add icon</p>
                </div>}
                {!isCover && <div id={'add-cover'}
                                 onClick={() => {
                                     setIsCover(true)
                                     setCover(yellow)
                                 }}>
                    <img alt={'add-cover'} src={picture}/>
                    <p>Add cover</p>
                </div>}
                <div id={'add-comment'}>
                    <img alt={'comment-icon'} src={comment}/>
                    <p>Add comment</p>
                </div>
            </div>
        </div>
    )
}
