import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import '../../../../scss/mediaElement.scss';
import video from '../../../../assets/icons/video.png';
import picture from '../../../../assets/icons/picture.png'
import { Menu } from "./Menu";
import { Video } from "./Video";
import { Picture } from "./Picture";

type Props = {
    value: string,
    type: string,
    title: string,
    setValue: Dispatch<SetStateAction<string>>,
}
export type MediaElementProps = {
    value:string
}

export const Media = (props: Props) => {
    const {value, type, title, setValue} = props

    const [icon, setIcon] = useState('')
    const [menu, setMenu] = useState(false)
    const [element, setElement] = useState<JSX.Element | null>(null)

    const configureElement = (icon: string, element: JSX.Element) => {
        setIcon(icon)
        setElement(element)
    }

    useEffect(() => {
        switch (type) {
            case "VIDEO":
                configureElement(video, <Video value={value}/>)
                break
            case "PICTURE":
                configureElement(picture, <Picture value={value}/>)
        }
    }, [type, value])

    const setMediaLink = (value: string, type: string) => {
        switch (type) {
            case "VIDEO":
                setValue(value.replace('https://youtu.be/', ''))
                break
            case "PICTURE":
                setValue(value)
        }
    }

    return (
        <div className={'media-element'}>
            {value.length === 0
                ? <div className={'add-media-element'} onClick={() => setMenu(true)}>
                    <img alt={''} className={'media-element-icon'} src={icon}/>
                    <p className={'media-element-title'}>{title}</p>
                </div>
                : element}
            {menu && <Menu type={type} setMediaLink={setMediaLink} setMenu={setMenu}/>}
        </div>
    )
}