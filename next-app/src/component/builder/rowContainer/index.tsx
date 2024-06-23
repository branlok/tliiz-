import React, { ReactElement } from 'react'
import styles from './index.module.css';
import Row from './row';


//logic for generating rows
/**
 * @description holds row logic
 * @param param0 
 * @returns 
 */
function index({ }: Props) {
    let rows = ["tier a", "tier b", "tier c", "tier d", "tier e", "tier f"]
    return (
        <div className={styles.rowWrapper}>
            {rows.map((item) => {
                return <Row name={item} key={item} collapse={item !== "tier f"} />
            })}
        </div>
    )
}


export default index