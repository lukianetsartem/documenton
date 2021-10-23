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
                setTextStyle('')
                setPlaceholder(initialPlaceholder)
        }
    }, [type, initialPlaceholder, setPlaceholder])

    const onToDoChange = (e:boolean) => {
        if(e) {
            setTextStyle('to-do-done')
            changeToDoState({id: id, isChecked: true})
        } else {
            setTextStyle('')
            changeToDoState({id: id, isChecked: false})
        }
    }

    console.log(isChecked)

    return (
        <div className={'element-field'}>
            {menu && <Menu id={id} clickOutsideMenu={clickOutsideMenu} changeElementType={changeElementType}/>}
            {isChecked !== undefined &&
            <input className={'to-do'} type={'checkbox'} onChange={(e) => onToDoChange(e.target.checked)}/>}
            <TextareaAutosize value={value} placeholder={placeholder} className={`text-field ${textStyle}`}
                              onChange={e => onValueChanging(e)}
                              onFocus={() => setPlaceholder(initialPlaceholder)}
                              onBlur={() => isChecked === undefined && setPlaceholder('')}/>
        </div>
    )
}