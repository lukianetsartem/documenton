import plus from "../../../assets/icons/plus.png";
import dots from "../../../assets/icons/dots.png";
import React from "react";

export const ElementControls = () => {
    return (
        <div className={'element-controls'}>
            <div className={'add-item'}>
                <img alt={'plus'} src={plus}/>
            </div>
            <div className={'move-item'}>
                <img alt={'dots'} src={dots}/>
            </div>
        </div>
    )
}