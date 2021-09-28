import React, {useState, DragEvent} from "react";
import plus from "../../assets/icons/plus.png";
import dots from "../../assets/icons/dots.png";
import TextareaAutosize from "react-textarea-autosize";
import {DocumentItemType} from "../Document";

type Props = {
    dragging: (type: string, e: DragEvent<HTMLDivElement>, item: DocumentItemType) => void,
    item: DocumentItemType,
}

export const Text = (props: Props) => {
    const {item, dragging} = props
    const [value, setValue] = useState(item.text)

    const draggingHandler = (type: string, e: DragEvent<HTMLDivElement>) => {
        dragging(type, e, props.item)
    }

    return (
        <div className={'text-item'}
             onDragStart={(e: DragEvent<HTMLDivElement>) => draggingHandler("start", e)}
             onDragLeave={(e: DragEvent<HTMLDivElement>) => draggingHandler("leave", e)}
             onDragEnd={(e: DragEvent<HTMLDivElement>) => draggingHandler("end", e)}
             onDragOver={(e: DragEvent<HTMLDivElement>) => draggingHandler("over", e)}
             onDrop={(e: DragEvent<HTMLDivElement>) => draggingHandler("drop", e)}>
            <div className={'text-item-controls'}>
                <div className={'add-item'}>
                    <img alt={'plus'} src={plus}/>
                </div>
                <div className={'move-item'} draggable={true}>
                    <img alt={'dots'} src={dots}/>
                </div>
            </div>
            <TextareaAutosize value={value} placeholder={`Type '/' for commands`} className={'text-field'}
                              onChange={e => setValue(e.target.value)}/>
        </div>
    )
}