import React, { ReactElement } from 'react'
import styles from './index.module.css';
import Tools from './Tools';
type Props = {
    titleComponent?: ReactElement,
    actionComponent?: ReactElement
}

// Acceppts Title Component
// Holds Action Component
/**
 * 
 * @param titleComponent displays title
 * @param actionComponent displays possible actions
 * @returns 
 */

const ExampleTitle = <h1 className={styles.title}>A Tier List</h1>;
const ExampleActions = <div><button>1</button> <button>2</button></div>

function index({ titleComponent = ExampleTitle, actionComponent = ExampleActions }: Props) {
    return (
        <header className={styles.header}>
            <div className={styles.titleContainer}>{titleComponent}</div>
            <div className={styles.actionContainer}><Tools /></div>
        </header>
    )
}


export default index