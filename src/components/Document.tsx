import React, {useState, DragEvent} from "react";
import {Controls} from "./DocumentElements/Controls";
import {Title} from "./DocumentElements/Title";
import {DefaultElement} from "./DocumentElements/DefaultElement/DefaultElement";
import {Cover} from "./DocumentElements/Cover/Cover";
import {Emoji} from "./DocumentElements/Emoji/Emoji";
import gradient_1 from '../assets/backgrounds/gradients/gradient_1.png';

export type DocumentElementType = {
    id: number,
    position: number,
    value: string,
    type: string,
    placeholder: string,
    isChecked?: boolean
}
export type ChangeElementTypeData = {
    id: number,
    type: string,
    placeholder: string
}
export type ChangeToDoStateData = {
    id: number,
    isChecked: boolean
}

export const Document = () => {
    const elements = [
        {id: 1, position: 1, value: "", type: "VIDEO", placeholder: 'Embed a YouTube video'},
        {id: 2, position: 2, value: "", type: "PICTURE", placeholder: 'Embed a picture by link'},
    ]

    const [documentElements, setDocumentElements] = useState(elements)
    const [currentItem, setCurrentItem] = useState<DocumentElementType>()

    // Dragging code
    const dragging = (type: string, e: DragEvent<HTMLDivElement>, item: DocumentElementType) => {
        switch (type) {
            case "start": {
                setCurrentItem(item)
                break;
            }
            case "end": {
                break;
            }
            case "leave": {
                break;
            }
            case "over": {
                e.preventDefault()
                break;
            }
            case "drop": {
                e.preventDefault()
                setDocumentElements(documentElements.map(i => {
                    if (currentItem !== undefined) {
                        if (i.id === item.id) {
                            return {...i, position: currentItem.position}
                        }
                        if (i.id === currentItem.id) {
                            return {...i, position: item.position}
                        }
                    }
                    return i
                }))
                break;
            }
        }
    }
    const documentItemsSorter = (a: DocumentElementType, b: DocumentElementType) => {
        if (a.position > b.position) return 1
        else return -1
    }

    const [isEmojiShown, setIsEmojiShown] = useState(true)
    const [isCover, setIsCover] = useState(true)
    const [cover, setCover] = useState(gradient_1)

    // Changing element type feature (for example: text => heading)
    const changeElementType = (data: ChangeElementTypeData) => {
        const {id, type, placeholder} = data
        setDocumentElements(documentElements.map(e => {
            if (e.id === id) {
                switch (type) {
                    case "TEXT":
                    case "BIG_HEADING":
                    case "MEDIUM_HEADING":
                    case "SMALL_HEADING":
                    case "VIDEO":
                        return {
                            id: e.id,
                            position: e.position,
                            value: e.value,
                            type: type,
                            placeholder: placeholder
                        }
                    case "TO_DO":
                        return {
                            id: e.id,
                            position: e.position,
                            value: e.value,
                            type: type,
                            placeholder: placeholder,
                            isChecked: false
                        }
                    default:
                        return e
                }
            } else return e
        }))
    }

    // Changing isChecked property for to-do item
    const changeToDoState = (data: ChangeToDoStateData) => {
        const {id, isChecked} = data
        setDocumentElements(documentElements.map(e => e.id === id ? {...e, isChecked} : e))
    }

    return (
        <div id={'document'}>
            <header id={'header'}/>
            <Cover cover={cover} setCover={setCover} isCover={isCover} setIsCover={setIsCover}/>
            <div id={'document-content'}>
                {isEmojiShown && <Emoji isEmojiShown={isEmojiShown} setIsEmojiShown={setIsEmojiShown}/>}
                <Controls isEmojiShown={isEmojiShown} setIsEmojiShown={setIsEmojiShown} isCover={isCover}
                          setIsCover={setIsCover} setCover={setCover}/>
                <Title/>
                {documentElements.sort(documentItemsSorter).map(element =>
                    <DefaultElement key={element.id} element={element} changeElementType={changeElementType}
                                    changeToDoState={changeToDoState} dragging={dragging}/>)}
            </div>
        </div>
    )
}