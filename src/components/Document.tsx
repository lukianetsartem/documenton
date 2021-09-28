import React from "react";
import {Controls} from "./DocumentElements/Controls";
import {Title} from "./DocumentElements/Title";
import {Text} from "./DocumentElements/Text";
import {Cover} from "./DocumentElements/Cover";

export const Document = () => {

    return (
        <div id={'document'}>
            <Cover/>
            <div id={'document-content'}>
                <Controls/>
                <Title/>
                <Text/>
            </div>
        </div>
    )
}