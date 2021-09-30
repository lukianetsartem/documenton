import React, {Dispatch, SetStateAction, SyntheticEvent} from "react";
import Picker from "emoji-picker-react";
import close from "../../assets/icons/close.png";
import trash from "../../assets/icons/trash.png";

type EmojiFinderProps = {
    selectedEmoji: string,
    setIsEmojiShown:  Dispatch<SetStateAction<boolean>>,
    setSelectedEmoji: Dispatch<SetStateAction<string>>
    setIsEmojiFinderShown: Dispatch<SetStateAction<boolean>>,
}

export const EmojiFinder = (props: EmojiFinderProps) => {
    type Emoji = { emoji: string }
    const {selectedEmoji, setSelectedEmoji, setIsEmojiFinderShown, setIsEmojiShown} = props

    const onEmojiClick = (event: SyntheticEvent, emojiObject: Emoji) => {
        const emoji = emojiObject.emoji
        if(selectedEmoji !== emoji) {
            setSelectedEmoji(emoji)
            setIsEmojiFinderShown(false)
        }
    }

    const deleteEmoji = () => {
        setSelectedEmoji('')
        setIsEmojiFinderShown(false)
        setIsEmojiShown(false)
    }

    return (
        <div id={'emoji-finder'}>
            <Picker onEmojiClick={onEmojiClick}/>
            <div id={'emoji-finder-controls'}>
                <img alt={'close'} src={close} onClick={() => setIsEmojiFinderShown(false)}/>
                <img alt={'delete'} src={trash} onClick={() => deleteEmoji()}/>
            </div>
        </div>
    )
}