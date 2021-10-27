import React, {useState, DragEvent} from "react";
import {ChangeElementTypeData, ChangeToDoStateData, DocumentElementType} from "../../Document";
import {ElementControls} from "./Controls";
import '../../../scss/element.scss';
import {Text} from '../Elements/Text/Text'
import { Media } from "../Elements/Media/Media";

type Props = {
    dragging: (type: string, e: DragEvent<HTMLDivElement>, item: DocumentElementType) => void,
    element: DocumentElementType,
    changeElementType: (data:ChangeElementTypeData) => void
    changeToDoState: (data:ChangeToDoStateData) => void
}

export const DefaultElement = (props: Props) => {
    const {element, dragging, changeElementType, changeToDoState} = props
    const [value, setValue] = useState(element.value)
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

    const setMediaLink = (value:string) => {
        console.log(value)
    }

    // Setting all elements of the document depending on the type
    const elementSetter = (element: DocumentElementType) => {
        switch (element.type) {
            case "TEXT":
            case "BIG_HEADING":
            case "MEDIUM_HEADING":
            case "SMALL_HEADING":
            case "TO_DO":
                const textProps = {
                    menu: menu,
                    value: value,
                    placeholder: placeholder,
                    id: element.id,
                    type: element.type,
                    initialPlaceholder: element.placeholder,
                    isChecked: element.isChecked,
                    setPlaceholder: setPlaceholder,
                    onValueChanging: onValueChanging,
                    clickOutsideMenu: clickOutsideMenu,
                    changeElementType: changeElementType,
                    changeToDoState: changeToDoState,
                }
                return <Text {...textProps}/>
            case "VIDEO":
                const mediaProps = {
                    value: value,
                    type: element.type,
                    title: element.placeholder,
                    setMediaLink: setMediaLink,
                }
                return <Media {...mediaProps}/>
        }
    }

    return (
        <div className={'element'} {...dragEvents}>
            <ElementControls/>
            {elementSetter(element)}
        </div>
    )
}