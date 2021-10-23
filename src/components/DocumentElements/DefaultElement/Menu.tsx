import React, {useRef} from "react";
import {MenuOption} from "./MenuOption";
import {ChangeElementTypeData} from "../../Document";

type Props = {
    clickOutsideMenu: () => void,
    changeElementType: (data: ChangeElementTypeData) => void,
    id: number,
}

export const Menu = (props: Props) => {
    const menuRef = useRef<HTMLDivElement>(null)

    const sections = [
        {
            section: 'Basic blocks',
            options: [
                {
                    title: 'Text',
                    subtitle: 'Just start writing plain text',
                    placeholder: 'Type \'/\' for commands',
                    type: 'TEXT',
                    cover: 'https://www.notion.so/images/blocks/text.9fdb530b.png'
                },
                {
                    title: 'Heading 1',
                    subtitle: 'Big section heading.',
                    placeholder: 'Big Heading',
                    type: 'BIG_HEADING',
                    cover: 'https://www.notion.so/images/blocks/header.57a7576a.png'
                },
                {
                    title: 'Heading 2',
                    subtitle: 'Medium section heading.',
                    placeholder: 'Medium heading',
                    type: 'MEDIUM_HEADING',
                    cover: 'https://www.notion.so/images/blocks/subheader.9aab4769.png'
                },
                {
                    title: 'Heading 3',
                    subtitle: 'Small section heading.',
                    placeholder: 'Small heading',
                    type: 'SMALL_HEADING',
                    cover: 'https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png'
                },
            ]
        }
    ]

    return (
        <div ref={menuRef} className={'element-menu'}
             onMouseLeave={() => document.addEventListener("click", props.clickOutsideMenu)}>
            {sections.map(s => <div className={'element-menu-section'} key={s.section}>
                <p className={'element-menu-section-title'}>{s.section}</p>
                {s.options.map(o => <MenuOption key={o.type} id={props.id} option={o}
                                                changeElementType={props.changeElementType}/>)}
            </div>)}
        </div>
    )
}