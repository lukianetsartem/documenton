import React from "react";

type Props = {
    isChecked: boolean
    onToDoChange: (style: string, isChecked: boolean) => void
}

export const Checkbox = ({isChecked, onToDoChange}: Props) => {

    return (
        <input className={'to-do'} type={'checkbox'} defaultChecked={isChecked}
               onChange={(e) => e.target.checked
                   ? onToDoChange('to-do-done', true)
                   : onToDoChange('', false)}/>
    )
}