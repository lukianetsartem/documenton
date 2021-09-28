import React, {useState} from "react";
import plus from "../../assets/icons/plus.png";
import dots from "../../assets/icons/dots.png";
import TextareaAutosize from "react-textarea-autosize";

export const Text = () => {
    const [value, setValue] = useState('')

    return (
        <div className={'text-item'}>
            <div className={'text-item-controls'}>
                <div className={'add-item'}>
                    <img alt={'plus'} src={plus}/>
                </div>
                <div className={'move-item'}>
                    <img alt={'dots'} src={dots}/>
                </div>
            </div>
            <TextareaAutosize value={value} placeholder={`Type '/' for commands`} className={'text-field'} onChange={e => setValue(e.target.value)}/>
        </div>
    )
}