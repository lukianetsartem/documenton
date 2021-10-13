import React, {Dispatch, SetStateAction, useState} from "react";

import {CoverMenu} from "./CoverMenu";

type Props = {
    isCover: boolean,
    cover: string,
    setIsCover: Dispatch<SetStateAction<boolean>>,
    setCover: Dispatch<SetStateAction<string>>
}

export const Cover = (props: Props) => {
    const {cover, setCover, isCover, setIsCover} = props
    const [isCoverMenuShown, setIsCoverMenuShown] = useState(false)

    const removeCover = () => {
        setCover('')
        setIsCover(false)
        setIsCoverMenuShown(false)
    }

    return (
        <div id={'document-cover-wrapper'}>
            {isCover && <div id={'document-cover'} style={{backgroundImage: `url(${cover})`}}>
                <div id={'document-cover-content'}>
                    <button id={'change-cover'} onClick={() => setIsCoverMenuShown(true)}>Change cover</button>
                </div>
            </div>}
            {isCoverMenuShown &&
            <CoverMenu setIsCoverMenuShown={setIsCoverMenuShown}
                       setCover={setCover}
                       removeCover={removeCover}/>}
        </div>
    )
}