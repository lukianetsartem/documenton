import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Menu} from "../Element/Menu";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
    menu: boolean,
    value: string,
    placeholder: string,
    initialPlaceholder: string,
    onValueChanging: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    setPlaceholder: Dispatch<SetStateAction<string>>,
    clickOutsideMenu: () => void,
    type: string,
}

export const Text = (props: Props) => {
    const {menu, value, placeholder, initialPlaceholder, type, onValueChanging, clickOutsideMenu, setPlaceholder} = props
    const [textStyle, setTextStyle] = useState('')

    useEffect(() => {
        // Setting text styles depending on type
        switch (type) {
            case "BIG_HEADING":
                setTextStyle('big-heading')
                break
            case "MEDIUM_HEADING":
                setTextStyle('medium-heading')
                break
            case "SMALL_HEADING":
                setTextStyle('small-heading')
        }
    }, [])

    return (
        <div className={'element-field'}>
            {menu && <Menu clickOutsideMenu={clickOutsideMenu}/>}
            <TextareaAutosize value={value} placeholder={placeholder} className={`text-field ${textStyle}`}
                              onChange={e => onValueChanging(e)}
                              onFocus={() => setPlaceholder(initialPlaceholder)}
                              onBlur={() => setPlaceholder('')}/>
        </div>
    )
}
