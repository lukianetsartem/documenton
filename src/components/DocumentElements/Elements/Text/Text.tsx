import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Menu} from "./Menu";
import TextareaAutosize from "react-textarea-autosize";
import {ChangeElementTypeData, ChangeToDoStateData} from "../../../Document";
import {Checkbox} from "./Checkbox";

type Props = {
    menu: boolean,
    value: string,
    placeholder: string,
    type: string,
    id: number,
    isChecked?: boolean,
    initialPlaceholder: string,
    setPlaceholder: Dispatch<SetStateAction<string>>,
    setValue: Dispatch<SetStateAction<string>>,
    setMenu: Dispatch<SetStateAction<boolean>>,
    changeElementType: (data: ChangeElementTypeData) => void
    changeToDoState: (data: ChangeToDoStateData) => void,
}

export const Text = (props: Props) => {
    const {
        id, menu, type, value, placeholder, initialPlaceholder, setPlaceholder,
        changeElementType, changeToDoState, isChecked, setMenu, setValue
    } = props
    const [textStyle, setTextStyle] = useState('')

    useEffect(() => {
        // Setting text styles depending on type
        switch (type) {
            case "TEXT":
                setTextStyle('')
                break
            case "BIG_HEADING":
                setTextStyle('big-heading')
                break
            case "MEDIUM_HEADING":
                setTextStyle('medium-heading')
                break
            case "SMALL_HEADING":
                setTextStyle('small-heading')
                break
            case "TO_DO":
                isChecked ? setTextStyle('to-do-done') : setTextStyle('')
                setPlaceholder(initialPlaceholder)
        }
    }, [isChecked, type, initialPlaceholder, setPlaceholder])

    const clickOutsideMenu = () => {
        setMenu(false)
        setValue('')
        document.removeEventListener("click", clickOutsideMenu)
    }

    // Textarea value changing catcher
    const onValueChanging = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value

        setValue(value)
        if (value === '/') {
            setMenu(true)
            document.addEventListener("click", clickOutsideMenu)
        } else {
            setMenu(false)
        }
    }

    // To do statement changing catcher
    const onToDoChange = (style: string, isChecked: boolean) => {
        setTextStyle(style)
        changeToDoState({id: id, isChecked: isChecked})
    }

    return (
        <div className={'element-field'}>
            {menu && <Menu id={id} clickOutsideMenu={clickOutsideMenu} changeElementType={changeElementType}/>}
            {isChecked !== undefined && <Checkbox isChecked={isChecked} onToDoChange={onToDoChange}/>}
            <TextareaAutosize value={value} placeholder={placeholder} className={`text-field ${textStyle}`}
                              onChange={e => onValueChanging(e)}
                              onFocus={() => setPlaceholder(initialPlaceholder)}
                              onBlur={() => isChecked === undefined && setPlaceholder('')}/>
        </div>
    )
}