import React, {Dispatch, SetStateAction, useState} from "react";
import { EmojiFinder } from "./EmojiFinder";

type EmojiProps = {
    isEmojiShown: boolean,
    setIsEmojiShown: Dispatch<SetStateAction<boolean>>
}

export const Emoji = (props: EmojiProps) => {
    const {isEmojiShown, setIsEmojiShown} = props
    const [isEmojiFinderShown, setIsEmojiFinderShown] = useState(false)
    const [selectedEmoji, setSelectedEmoji] = useState('🕋')

    const selectIcon = () => {
        !isEmojiFinderShown ? setIsEmojiFinderShown(true) : setIsEmojiFinderShown(false)
    }

    return (
        <div id={'document-icon-wrapper'}>
            {isEmojiShown && <div id={'document-icon'} onClick={selectIcon}>{selectedEmoji}</div>}
            {isEmojiFinderShown && <EmojiFinder selectedEmoji={selectedEmoji}
                                                setIsEmojiShown={setIsEmojiShown}
                                                setIsEmojiFinderShown={setIsEmojiFinderShown}
                                                setSelectedEmoji={setSelectedEmoji}/>}
        </div>
    )
}