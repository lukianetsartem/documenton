import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Menu} from "../DefaultElement/Menu";
import TextareaAutosize from "react-textarea-autosize";
import {ChangeElementTypeData, ChangeToDoStateData} from "../../Document";

type Props = {
    menu: boolean,
    value: string,
    placeholder: string,
    initialPlaceholder: string,
    onValueChanging: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    setPlaceholder: Dispatch<SetStateAction<string>>,
    changeElementType: (data: ChangeElementTypeData) => void
    changeToDoState: (data: ChangeToDoStateData) => void,
    clickOutsideMenu: () => void,
    type: string,
    id: number,
    isChecked?: boolean,
}

export const Text = (props: Props) => {
    const {
        id,
        menu,
        type,
        value,
        placeholder,
        initialPlaceholder,
        onValueChanging,
        clickOutsideMenu,
        setPlaceholder,
        changeElementType,
        changeToDoState,
        isChecked
    } = props
    const [textStyle, setTextStyle] = useState('')
    const [checked] = useState(isChecked)

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
                if (checked) setTextStyle('to-do-done')
                setPlaceholder(initialPlaceholder)
        }
    }, [checked, type, initialPlaceholder, setPlaceholder])

    const onToDoChange = (style: string, isChecked: boolean) => {
        setTextStyle(style)
        changeToDoState({id: id, isChecked: isChecked})
    }

    return (
        <div className={'element-field'}>
            {menu && <Menu id={id} clickOutsideMenu={clickOutsideMenu} changeElementType={changeElementType}/>}
            {checked !== undefined && <input className={'to-do'} type={'checkbox'} defaultChecked={checked}
                                             onChange={(e) => e.target.checked
                                                     ? onToDoChange('to-do-done', true)
                                                     : onToDoChange('', false)}/>}
            <TextareaAutosize value={value} placeholder={placeholder} className={`text-field ${textStyle}`}
                              onChange={e => onValueChanging(e)}
                              onFocus={() => setPlaceholder(initialPlaceholder)}
                              onBlur={() => checked === undefined && setPlaceholder('')}/>
        </div>
    )
}