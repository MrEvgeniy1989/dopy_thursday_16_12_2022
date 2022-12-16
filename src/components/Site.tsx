import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Site.module.css'
import {Error404} from './pages/Error404';
import {Page} from './pages/Page';
import {dataState} from '../dataState/dataState';
import {useWindowSize} from '../helpers/useWindowSize';


export const Site = () => {
    const size = useWindowSize()
    console.log(size)

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {size < 991
                    ? <div className={styles.nav}>
                        <div><NavLink className={({isActive}) => isActive ? styles.nav_active : styles.navLink}
                                      to={'/page/0'}>Page One</NavLink></div>
                        <div><NavLink className={({isActive}) => isActive ? styles.nav_active : styles.navLink}
                                      to={'/page/1'}>Page Two</NavLink></div>
                        <div><NavLink className={({isActive}) => isActive ? styles.nav_active : styles.navLink}
                                      to={'/page/2'}>Page Three</NavLink></div>
                        <div><NavLink to={'/page/localStorage'}
                                      className={({isActive}) => isActive ? styles.active : styles.navLink}>LocalStorage</NavLink>
                        </div>

                        {/*<div><NavLink className={({isActive})=>isActive? styles.nav_active :styles.navLink}  to={'/page3'}>Page Three</NavLink></div>*/}
                    </div>
                    : <div></div>
                }

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>

                        <Route path={'/page/:id'} element={<Page dataState={dataState}/>}/>
                        {/*<Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};