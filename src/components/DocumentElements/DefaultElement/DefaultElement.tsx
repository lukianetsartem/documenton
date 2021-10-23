import React, {useState, DragEvent} from "react";
import {ChangeElementTypeData, DocumentElementType} from "../../Document";
import {ElementControls} from "./Controls";
import '../../../scss/element.scss';
import {Text} from '../Elements/Text'

type Props = {
    dragging: (type: string, e: DragEvent<HTMLDivElement>, item: DocumentElementType) => void,
    element: DocumentElementType,
    changeElementType: (data:ChangeElementTypeData) => void
}

export const DefaultElement = (props: Props) => {
    const {element, dragging, changeElementType} = props
    const [value, setValue] = useState(element.text)
    const [menu, setMenu] = useState(false)
    const [placeholder, setPlaceholder] = useState('')

    // Dragging code
    const draggingHandler = (type: string, e: DragEvent<HTMLDivElement>) => {
        dragging(type, e, element)
    }
    const dragEvents = {
        onDragStart: (e: DragEvent<HTMLDivElement>) => draggingHandler("start", e),
        onDragLeave: (e: DragEvent<HTMLDivElement>) => draggingHandler("leave", e),
        onDragEnd: (e: DragEvent<HTMLDivElement>) => draggingHandler("end", e),
        onDragOver: (e: DragEvent<HTMLDivElement>) => draggingHandler("over", e),
        onDrop: (e: DragEvent<HTMLDivElement>) => draggingHandler("drop", e),
    }

    // Check if user clicked outside menu
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

    // Setting all elements of the document depending on the type
    const elementSetter = (element: DocumentElementType) => {
        const textProps = {
            menu: menu,
            value: value,
            placeholder: placeholder,
            initialPlaceholder: element.placeholder,
            id: element.id,
            type: element.type,
            setPlaceholder: setPlaceholder,
            onValueChanging: onValueChanging,
            clickOutsideMenu: clickOutsideMenu,
            changeElementType: changeElementType,
        }

        switch (element.type) {
            case "TEXT":
            case "BIG_HEADING":
            case "MEDIUM_HEADING":
            case "SMALL_HEADING":
                return <Text {...textProps}/>
        }
    }

    return (
        <div className={'element'} {...dragEvents}>
            <ElementControls/>
            {elementSetter(element)}
        </div>
    )
}