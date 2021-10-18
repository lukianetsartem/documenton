import React, {useRef} from "react";

type Props = {
    clickOutsideMenu: () => void
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
                    type: 'TEXT',
                    cover: 'https://www.notion.so/images/blocks/text.9fdb530b.png'
                },
                {
                    title: 'Heading 1',
                    subtitle: 'Big section heading.',
                    type: 'BIG_HEADING',
                    cover: 'https://www.notion.so/images/blocks/header.57a7576a.png'
                },
                {
                    title: 'Heading 2',
                    subtitle: 'Medium section heading.',
                    type: 'MEDIUM_HEADING',
                    cover: 'https://www.notion.so/images/blocks/subheader.9aab4769.png'
                },
                {
                    title: 'Heading 3',
                    subtitle: 'Small section heading.',
                    type: 'SMALL_HEADING',
                    cover: 'https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png'
                },
            ]
        }
    ]

    return (
        <div ref={menuRef} className={'element-menu'} onClick={() => alert('click')}
             onMouseLeave={() => document.addEventListener("click", props.clickOutsideMenu)}>
            {sections.map(s => <div className={'element-menu-section'}>
                <p className={'element-menu-section-title'}>{s.section}</p>
                {s.options.map(o => <div className={'element-menu-option'}>
                    <img className={'element-menu-option-cover'} alt='' src={o.cover}/>
                    <div className={'element-menu-option-text'}>
                        <p className={'element-menu-option-title'}>{o.title}</p>
                        <p className={'element-menu-option-subtitle'}>{o.subtitle}</p>
                    </div>
                </div>)}
            </div>)}
        </div>
    )
}