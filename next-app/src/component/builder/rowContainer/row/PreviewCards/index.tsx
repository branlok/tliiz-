import React, { ReactElement } from 'react'
import styles from './index.module.css';
import { useCounterStore } from '../../../../../states/zustand/provider';



//logic for generating rows
/**
 * @description holds row logic
 * @param param0 
 * @returns 
 */

function index({ id }: Props) {
    //uses id to populate card.
    let item = useCounterStore(state => state.items[id]);

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <img className={styles.cardImg} src={item.media.image} alt="" />
            </div>
            <div className={styles.cardInfo}>
                <span className={styles.subtitle}>{item.subtitle}</span>
                <h1 className={styles.title}>{item.title}</h1>
            </div>
        </div>
    )
}


export default index