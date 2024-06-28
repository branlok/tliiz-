import React, { ReactElement } from 'react'
import styles from './index.module.css';
import { useCounterStore } from '../../../../../states/zustand/provider';
import { nanoid } from 'nanoid';

/**
 * @description holds row logic
 * @param param0 
 * @returns 
 */

function index({ }: Props) {

    let addNewRow = useCounterStore(state => state.addNewRow);

    return (
        <form className={styles.formWrapper} onSubmit={(e) => { e.preventDefault(); addNewRow(nanoid(), e.target[0].value.toString()); e.target.reset() }}>
            <input type="text" placeholder="Untitled Row" className={styles.input} />
            <button className={styles.button}>Add Row + </button>
        </form>
    )
}


export default index