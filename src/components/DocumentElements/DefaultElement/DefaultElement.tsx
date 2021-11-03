import React, {useState} from "react";
import {ChangeElementTypeData, ChangeToDoStateData, DocumentElementType} from "../../Document";
import {ElementControls} from "./Controls";
import '../../../scss/element.scss';
import {Text} from '../Elements/Text/Text'
import {Media} from "../Elements/Media/Media";

type Props = {
    element: DocumentElementType,
    changeElementType: (data: ChangeElementTypeData) => void
    changeToDoState: (data: ChangeToDoStateData) => void
}

export const DefaultElement = (props: Props) => {
    const {element, changeElementType, changeToDoState} = props
    const [value, setValue] = useState(element.value)
    const [menu, setMenu] = useState(false)
    const [placeholder, setPlaceholder] = useState('')

    const setTextElement = () => {
        const props = {
            menu: menu,
            value: value,
            placeholder: placeholder,
            id: element.id,
            type: element.type,
            initialPlaceholder: element.placeholder,
            isChecked: element.isChecked,
            setMenu: setMenu,
            setValue: setValue,
            setPlaceholder: setPlaceholder,
            changeElementType: changeElementType,
            changeToDoState: changeToDoState,
        }
        return <Text {...props}/>
    }
    const setMediaElement = () => {
        const props = {
            value: value,
            type: element.type,
            title: element.placeholder,
            setValue: setValue,
        }
        return <Media {...props}/>
    }

    const strategies = {
        TEXT: setTextElement(),
        MEDIA: setMediaElement()
    }

    type strategyKey = keyof typeof strategies

    // Deploying element depending on type
    const setElement = (strategyKey: strategyKey) => {
        return strategies[strategyKey]
    }

    return (
        <div className={'element'}>
            <ElementControls/>
            {setElement(element.category as strategyKey)}
        </div>
    )
}