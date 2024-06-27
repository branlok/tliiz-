import React, { ReactElement } from 'react'
import styles from './index.module.css';
import { useCounterStore } from '../../../../../states/zustand/provider';



//logic for generating rows
/**
 * @description holds row logic
 * @param param0 
 * @returns 
 */

function index({ id, isActive, onClickHandler }: Props) {
    //uses id to populate card.
    let item = useCounterStore(state => state.items[id]);

    return (
        <div onClick={onClickHandler} className={styles.cardWrapper} style={{ opacity: isActive ? 1 : 1, marginLeft: isActive ? '15px' : '0px' }}>
            <div className={styles.card}>
                <img className={styles.cardImg} src={item.media.image} alt="" />
            </div>
        </div>
    )
}


export default index