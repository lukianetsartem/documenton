import React from 'react';
import './App.scss';

import { Document } from "./components/Document";

export const App = () => {
    return (
        <main>
            <section id={'menu'}>

            </section>
            <section id={'content'}>
                <header/>
                <Document/>
            </section>
        </main>
    )
}