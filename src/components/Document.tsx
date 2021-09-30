import React, {useState, DragEvent} from "react";
import {Controls} from "./DocumentElements/Controls";
import {Title} from "./DocumentElements/Title";
import {Text} from "./DocumentElements/Text";
import {Cover} from "./DocumentElements/Cover";
import { Emoji } from "./DocumentElements/Emoji";

export type DocumentItemType = {
    id: number,
    position: number,
    text: string,
}

export const Document = () => {
    const items = [
        {id: 1, position: 1, text: "first"},
        {id: 2, position: 2, text: "second"},
        {id: 3, position: 3, text: "third"},
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

    const [isEmojiShown, setIsEmojiShown] = useState(false)

    return (
        <div id={'document'}>
            <Cover/>
            <div id={'document-content'}>
                {isEmojiShown && <Emoji isEmojiShown={isEmojiShown} setIsEmojiShown={setIsEmojiShown}/>}
                <Controls isEmojiShown={isEmojiShown} setIsEmojiShown={setIsEmojiShown}/>
                <Title/>
                {documentItems.sort(documentItemsSorter).map(item => <Text key={item.id} item={item} dragging={dragging}/>)}
            </div>
        </div>
    )
}