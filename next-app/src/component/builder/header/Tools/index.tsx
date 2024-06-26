import React, { ReactElement } from 'react'
import styles from './index.module.css';
import { useCounterStore } from '../../../../states/zustand/provider';
type Props = {
}
// Expand All / Callapse All
// Expand Only Last
function index({ }: Props) {
    let expandAllRows = useCounterStore(state => state.expandAllRows)
    let collapseAllRows = useCounterStore(state => state.collapseAllRows)
    let OpenOnlyLastRow = useCounterStore(state => state.OpenOnlyLastRow)
    return (
        <div className={styles.toolContainer}>
            <button className={styles.actionButton} onClick={expandAllRows}>Expand All</button>
            <button className={styles.actionButton} onClick={OpenOnlyLastRow}>Expand Only Last</button>
        </div>
    )
}


export default index