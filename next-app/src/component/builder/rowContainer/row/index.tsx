import React, { ReactElement, useState } from 'react'
import styles from './index.module.css';
import ArrowDown from '../../../../icons/arrowDown';
import ThreeDots from '../../../../icons/threeDots';
import DragHandle from '../../../../icons/dragHandle';

//logic for generating rows
/**
 * @description holds row logic
 * @param param0 
 * @returns 
 */


// General Themes - have a theme dropdown somewhere.
// - Default
// - Stuff that I like

function index({ name, collapse }: Props) {
    let [drawerOpen, setDrawerOpen] = useState(collapse);
    let [settingsOpen, setSettingsOpen] = useState(false);
    let collapseButton = <button className={styles.collapseButton} style={{ transform: !drawerOpen ? 'rotate(180deg)' : '' }} onClick={() => setDrawerOpen(prev => !prev)}><ArrowDown /></button>;
    return (
        <div className={styles.row} data-collapse={drawerOpen}>
            <header className={styles.header}>
                <div className={styles.titleWrapper}>
                    <div className={styles.highlight}>1</div>
                    <h1 className={styles.rowTitle}>{name}</h1>
                </div>
                <div className={styles.tools}>
                    {!settingsOpen && <button className={styles.openSettingsButton} onClick={() => setSettingsOpen(prev => !prev)}><ThreeDots /></button>}
                    {settingsOpen && <div className={styles.openSettingsContainer}>
                        {/* delete */}
                        
                        <button className={styles.openSettingsButton} onClick={() => setSettingsOpen(prev => !prev)}>a</button>
                        <button className={styles.openSettingsButton} onClick={() => setSettingsOpen(prev => !prev)}>b</button>
                        <button className={styles.openSettingsButton} onClick={() => setSettingsOpen(prev => !prev)}>x</button></div>}
                    {collapseButton}
                </div>
            </header>
            <div className={styles.cardContainer}>
                {/* fill cards */}
            </div>
            <div className={styles.rowController} data-collapse={drawerOpen}>
                {collapseButton}
            </div>
        </div>
    )
}


export default index