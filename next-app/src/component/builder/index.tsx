import React from 'react'
import styles from './index.module.css';
import Header from './header';
import RowContainer from './rowContainer';
type Props = {}


function index({ }: Props) {
    return (
        <div className={styles.listWrapper}>
            {/* Header Row: Title, Actions*/}
            <Header />
            <RowContainer />
            {/* <Header /> */}
            {/* Rows */}
            {/* Miscellaneous Footer Metadata */}
        </div>
    )
}

export default index