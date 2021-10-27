import clear from "../../../../assets/icons/clear.png";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";

type Props = {
    setMediaLink: (value: string) => void,
    setMenu: Dispatch<SetStateAction<boolean>>,
    type: string,
}

export const Menu = (props: Props) => {
    const {type, setMenu, setMediaLink} = props

    const [inputValue, setInputValue] = useState('')

    // Menu text variables
    const [placeholder, setPlaceholder] = useState('')
    const [subtext, setSubtext] = useState('')
    const [buttonText, setButtonText] = useState('')

    const setMenuParts = (placeholder: string, buttonText: string, subtext: string,) => {
        setPlaceholder(placeholder)
        setButtonText(buttonText)
        setSubtext(subtext)
    }

    useEffect(() => {
        switch (type) {
            case "VIDEO":
                setMenuParts('Paste the video link...', 'Embed video', 'Works with youtube videos')
        }
    }, [type])

    const onSubmit = () => {
        setMediaLink(inputValue)
        clickOutsideMenu()
    }

    // Check if user clicked outside menu
    const clickOutsideMenu = () => {
        setMenu(false)
        document.removeEventListener("click", clickOutsideMenu)
    }

    return (
        <div className={'media-element-menu'}
             onMouseOver={() => document.removeEventListener("click", clickOutsideMenu)}
             onMouseLeave={() => document.addEventListener("click", clickOutsideMenu)}>
            <div className={'media-element-input-section'}>
                <input className={'media-link-input'} value={inputValue} placeholder={placeholder}
                       onChange={(e) => setInputValue(e.target.value)}/>
                {inputValue.length > 0 && <img alt={''} src={clear} className={'media-link-input-clear'}
                                               onClick={() => setInputValue('')}/>}
            </div>
            <button className={'media-link-submit'} onClick={onSubmit}>{buttonText}</button>
            <p className={'media-element-subtext'}>{subtext}</p>
        </div>
    )
}