import React from 'react';
import {DataStateType} from '../../dataState/dataState';
import {useParams} from 'react-router-dom';
import {Content} from '../Content';

export type PagePropsType = {
    dataState: DataStateType
}

export const Page = (props: PagePropsType) => {
    let params = useParams()
    console.log(Number(params.id))
    return (
        <div>
            <Content
                page={props.dataState}
                route={Number(params.id)}
                // heading={props.dataState.pages[Number(params.id)].heading}
                // about={props.dataState.pages[Number(params.id)].about}
            />
        </div>
    );
};