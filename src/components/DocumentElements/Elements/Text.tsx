import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Menu} from "../DefaultElement/Menu";
import TextareaAutosize from "react-textarea-autosize";
import {ChangeElementTypeData} from "../../Document";

type Props = {
    menu: boolean,
    value: string,
    placeholder: string,
    initialPlaceholder: string,
    onValueChanging: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    setPlaceholder: Dispatch<SetStateAction<string>>,
    changeElementType: (data: ChangeElementTypeData) => void
    clickOutsideMenu: () => void,
    type: string,
    id: number,
}

export const Text = (props: Props) => {
    const {
        id,
        menu,
        value,
        placeholder,
        initialPlaceholder,
        type,
        onValueChanging,
        clickOutsideMenu,
        setPlaceholder,
        changeElementType
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
        }
    }, [type])

    return (
        <div className={'element-field'}>
            {menu && <Menu id={id} clickOutsideMenu={clickOutsideMenu} changeElementType={changeElementType}/>}
            <TextareaAutosize value={value} placeholder={placeholder} className={`text-field ${textStyle}`}
                              onChange={e => onValueChanging(e)}
                              onFocus={() => setPlaceholder(initialPlaceholder)}
                              onBlur={() => setPlaceholder('')}/>
        </div>
    )
}