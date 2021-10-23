import React from "react";
import {ChangeElementTypeData} from "../../Document";

type Props = {
    changeElementType: (data: ChangeElementTypeData) => void
    id: number,
    option: {
        title: string,
        subtitle: string,
        type: string,
        cover: string,
        placeholder: string,
    }
}

export const MenuOption = (props: Props) => {
    const {id, option, changeElementType} = props

    const data = {
        id: id,
        type: option.type,
        placeholder: option.placeholder
    }

    return (
        <div className={'element-menu-option'} key={option.type}
             onClick={() => changeElementType(data)}>
            <img className={'element-menu-option-cover'} alt='' src={option.cover}/>
            <div className={'element-menu-option-text'}>
                <p className={'element-menu-option-title'}>{option.title}</p>
                <p className={'element-menu-option-subtitle'}>{option.subtitle}</p>
            </div>
        </div>
    )
}