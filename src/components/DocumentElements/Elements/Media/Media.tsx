import React, {useEffect, useState} from "react";
import '../../../../scss/mediaElement.scss';
import video from '../../../../assets/icons/video.png';
import { Menu } from "./Menu";
import YouTube from "react-youtube";

type Props = {
    value: string,
    type: string,
    title: string,
    setMediaLink: (value:string) => void,
}

export const Media = (props: Props) => {
    const {value, type, title, setMediaLink} = props

    const [icon, setIcon] = useState('')
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        switch (type) {
            case "VIDEO":
                setIcon(video)
        }
    }, [type])

    return (
        <div className={'media-element'}>
            <div className={'add-media-element'} onClick={() => setMenu(true)}>
                <img alt={''} className={'media-element-icon'} src={icon}/>
                <p className={'media-element-title'}>{title}</p>
            </div>
            {menu && <Menu type={type} setMediaLink={setMediaLink} setMenu={setMenu}/>}
        </div>
    )
}