import React, {Dispatch, SetStateAction, useState} from "react";
import yellow from '../../../assets/backgrounds/collors/yellow.png'
import blue from '../../../assets/backgrounds/collors/blue.png'
import red from '../../../assets/backgrounds/collors/red.png'
import beige from '../../../assets/backgrounds/collors/beige.png'
import gradient_1 from '../../../assets/backgrounds/gradients/gradient_1.png'
import gradient_2 from '../../../assets/backgrounds/gradients/gradient_2.png'
import gradient_3 from '../../../assets/backgrounds/gradients/gradient_3.png'
import woodcut_1 from '../../../assets/backgrounds/japan/woodcut_1.jpg'
import woodcut_2 from '../../../assets/backgrounds/japan/woodcut_2.jpg'
import woodcut_3 from '../../../assets/backgrounds/japan/woodcut_3.jpg'

type Props = {
    setCover: Dispatch<SetStateAction<string>>,
    setIsCoverMenuShown: Dispatch<SetStateAction<boolean>>,
    removeCover: () => void
}

export const CoverMenu = (props: Props) => {
    const {setCover, removeCover, setIsCoverMenuShown} = props

    const [isGalleryFinder, setIsGalleryFinder] = useState(true)
    const [isLinkFinder, setIsLinkFinder] = useState(false)
    const [coverLink, setCoverLink] = useState('')

    const options = [
        {
            title: 'Color',
            covers: [yellow, blue, red, beige]
        },
        {
            title: 'Gradients',
            covers: [gradient_1, gradient_2, gradient_3]
        },
        {
            title: 'Japanese',
            covers: [woodcut_1, woodcut_2, woodcut_3]
        }
    ]

    return (
        <div id={'cover-popup'}>
            <div id={'cover-popup-disabler'} onClick={() => setIsCoverMenuShown(false)}/>
            <div id={'cover-menu'}>
                <div id={'cover-menu-header'}>
                    <ul>
                        <li onClick={() => {
                            setIsGalleryFinder(true)
                            setIsLinkFinder(false)
                        }}>Gallery
                        </li>
                        <li onClick={() => {
                            setIsLinkFinder(true)
                            setIsGalleryFinder(false)
                        }}>Link
                        </li>
                    </ul>
                    <button id={'remove-cover'} onClick={removeCover}>Remove</button>
                </div>
                <div id={'cover-menu-main'}>
                    {isGalleryFinder && <div id={'gallery-menu'}>
                        {options.map(option => {
                            return (
                                <div className={'gallery-menu-item'}>
                                    <p>{option.title}</p>
                                    <div className={'cover-options'}>
                                        {option.covers.map(cover => <div
                                            onClick={() => setCover(cover)}
                                            style={{backgroundImage: `url(${cover})`}}/>)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
                    {isLinkFinder && <div id={'link-menu'}>
                        <input onChange={e => setCoverLink(e.target.value)} placeholder={'Paste an image link...'} id={'link-menu-input'}/>
                        <button id={'link-menu-submit'} onClick={() => setCover(coverLink)}>Submit</button>
                        <p>Works with any image from the web.</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}