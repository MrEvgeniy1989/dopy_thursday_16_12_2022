import React from 'react';
import {DataStateType} from '../dataState/dataState';
import {Navigate} from 'react-router-dom';

export type ContentPropsType = {
    page: DataStateType
    route: number
}

export const Content = (props: ContentPropsType) => {
    return (
        props.page.pages.length > props.route
            ? <>
                <div>{props.page.pages[props.route].heading}</div>
                <div>{props.page.pages[props.route].about}</div>
            </>
            : <Navigate to={'/*'}/>
    );
};