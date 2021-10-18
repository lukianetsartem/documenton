import React, {useState, DragEvent} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {DocumentItemType} from "../../Document";
import {Menu} from "./Menu";
import {ElementControls } from "./Controls";
import '../../../scss/element.scss'

type Props = {
    dragging: (type: string, e: DragEvent<HTMLDivElement>, item: DocumentItemType) => void,
    item: DocumentItemType,
}

export const DefaultElement = (props: Props) => {
    const {item, dragging} = props
    const [value, setValue] = useState(item.text)
    const [menu, setMenu] = useState(true)
    const [placeholder, setPlaceholder] = useState('')

    const draggingHandler = (type: string, e: DragEvent<HTMLDivElement>) => {
        dragging(type, e, props.item)
    }

    // Check if user clicked outside menu
    const clickOutsideMenu = () => {
        setMenu(false)
        setValue('')
        document.removeEventListener("click", clickOutsideMenu)
    }

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

    const dragEvents = {
        onDragStart: (e: DragEvent<HTMLDivElement>) => draggingHandler("start", e),
        onDragLeave: (e: DragEvent<HTMLDivElement>) => draggingHandler("leave", e),
        onDragEnd: (e: DragEvent<HTMLDivElement>) => draggingHandler("end", e),
        onDragOver: (e: DragEvent<HTMLDivElement>) => draggingHandler("over", e),
        onDrop: (e: DragEvent<HTMLDivElement>) => draggingHandler("drop", e),
    }

    return (
        <div className={'element'} {...dragEvents}>
            <ElementControls/>
            <div className={'element-field'}>
                {menu && <Menu clickOutsideMenu={clickOutsideMenu}/>}
                <TextareaAutosize value={value} placeholder={placeholder} className={'text-field'}
                                  onChange={e => onValueChanging(e)}
                                  onFocus={() => setPlaceholder('Type \'/\' for commands')}
                                  onBlur={() => setPlaceholder('')}/>
            </div>
        </div>
    )
}