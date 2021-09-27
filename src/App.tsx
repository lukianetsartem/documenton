import React, {useState} from 'react';
import './App.scss';
import TextareaAutosize from 'react-textarea-autosize';
import plus from '../src/assets/icons/plus.png'
import dots from '../src/assets/icons/dots.png'

export const App = () => {
    return (
        <main>
            <section id={'menu'}>

            </section>
            <section id={'content'}>
                <header>

                </header>
                <Document/>
            </section>
        </main>
    )
}

const Document = () => {

    return (
        <div id={'document'}>
            <div id={'document-content'}>
                <Title/>
                <Text/>
            </div>
        </div>
    )
}

const Title = () => {
    const [value, setValue] = useState('')

    return (
        <div className={'title-item'}>
            <TextareaAutosize value={value} placeholder={'Untitled'} className={'title-field'} onChange={e => setValue(e.target.value)}/>
        </div>
    )
}

const Text = () => {
    const [value, setValue] = useState('')

    return (
        <div className={'text-item'}>
            <div className={'text-item-controls'}>
                <div className={'add-item'}>
                    <img alt={''} src={plus}/>
                </div>
                <div className={'move-item'}>
                    <img alt={''} src={dots}/>
                </div>
            </div>
            <TextareaAutosize value={value} placeholder={`Type '/' for commands`} className={'text-field'} onChange={e => setValue(e.target.value)}/>
        </div>
    )
}