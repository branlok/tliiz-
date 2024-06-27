import React from 'react'
import styles from './index.module.css'
type Props = {}

function index({ children }: Props) {
    return (
        <div className={styles.overlayWrapper}>
            <div className={styles.overlayWrapperInner}>{children}</div>
        </div>
    )
}

export default index