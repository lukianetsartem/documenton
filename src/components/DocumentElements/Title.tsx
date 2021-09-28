import React, {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";

export const Title = () => {
    const [value, setValue] = useState('')

    return (
        <div className={'title-item'}>
            <TextareaAutosize value={value} placeholder={'Untitled'} className={'title-field'} onChange={e => setValue(e.target.value)}/>
        </div>
    )
}