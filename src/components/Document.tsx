import React, {useState, DragEvent} from "react";
import {Controls} from "./DocumentElements/Controls";
import {Title} from "./DocumentElements/Title";
import {DefaultElement} from "./DocumentElements/Element/Element";
import {Cover} from "./DocumentElements/Cover";
import {Emoji} from "./DocumentElements/Emoji";
import gradient_1 from '../assets/backgrounds/gradients/gradient_1.png'

export type DocumentItemType = {
    id: number,
    position: number,
    text: string,
}

export const Document = () => {
    const items = [
        {id: 1, position: 1, text: ""},
        //{id: 2, position: 2, text: "2"},
        //{id: 3, position: 3, text: "3"},
    ]

    const [documentItems, setDocumentItems] = useState(items)
    const [currentItem, setCurrentItem] = useState<DocumentItemType>()

    const dragging = (type: string, e: DragEvent<HTMLDivElement>, item: DocumentItemType) => {
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
                setDocumentItems(documentItems.map(i => {
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

    const documentItemsSorter = (a: DocumentItemType, b: DocumentItemType) => {
        if (a.position > b.position) return 1
        else return -1
    }

    const [isEmojiShown, setIsEmojiShown] = useState(true)
    const [cover, setCover] = useState(gradient_1)
    const [isCover, setIsCover] = useState(true)

    return (
        <div id={'document'}>
            <Cover cover={cover} setCover={setCover} isCover={isCover} setIsCover={setIsCover}/>
            <div id={'document-content'}>
                {isEmojiShown && <Emoji isEmojiShown={isEmojiShown} setIsEmojiShown={setIsEmojiShown}/>}
                <Controls isEmojiShown={isEmojiShown} setIsEmojiShown={setIsEmojiShown} isCover={isCover}
                          setIsCover={setIsCover} setCover={setCover}/>
                <Title/>
                {documentItems.sort(documentItemsSorter).map(item => <DefaultElement key={item.id} item={item}
                                                                                     dragging={dragging}/>)}
            </div>
        </div>
    )
}