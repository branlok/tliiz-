import React, { ReactElement, useState } from 'react'
import styles from './index.module.css';
import ArrowDown from '../../../../icons/arrowDown';
import ThreeDots from '../../../../icons/threeDots';
import { useCounterStore } from '../../../../states/zustand/provider';
import Card from './card';
import { SortableContext, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import CardDragWrapper from './card/cardDragWrapper';
import PreviewCards from './PreviewCards';
import FileDropper from './FileDropper';

//logic for generating rows
/**
 * @description holds row logic
 * @param param0 
 * @returns 
 */


// General Themes - have a theme dropdown somewhere.
// - Default
// - Stuff that I like

function index({ name, collapse, id, activeId }: Props) {
    // Get Store
    let { itemOrder, toggleRowCollapse: setDrawerCollapse , deleteRow,} = useCounterStore(state => state);
    let group = useCounterStore(state => state.groups[id]);


    console.log(useCounterStore.persist);
    
    const { setActivatorNodeRef, listeners } = useSortable({
        id: id,
    });
    let drawerCollapse = group.viewPreference.drawerCollapse;

    // let [setDrawerCollapse] = useState(group.viewPreference.drawerCollapse);
    let [settingsOpen, setSettingsOpen] = useState(false);
    
    let collapseButton = <button className={styles.collapseButton} style={{ transform: !drawerCollapse ? 'rotate(180deg)' : '' }} onClick={() => setDrawerCollapse(id)}><ArrowDown /></button>;
    return (
        <div className={styles.row} data-collapse={drawerCollapse}>
            <header className={styles.header}>
                <div className={styles.titleWrapper}>
                  {id === "unordered" || <div ref={setActivatorNodeRef} {...listeners} className={styles.highlight}></div>}
                    <h1 className={styles.rowTitle}>{group.title}</h1>
                </div>
                <div className={styles.tools}>
                    <div className={styles.previewCardsContainerWrapper}>
                        <div className={styles.previewCardsContainer} style={{ display: drawerCollapse ? 'flex' : 'none' }}>
                            {itemOrder[id].map(item => (
                                <PreviewCards onClickHandler={() => setDrawerCollapse(id)} key={item} id={item} isActive={activeId === item} />
                            ))}
                        </div>
                    </div>
                    {!settingsOpen && <button className={styles.openSettingsButton} onClick={() => setSettingsOpen(prev => !prev)}><ThreeDots /></button>}
                    {settingsOpen && <div className={styles.openSettingsContainer}>
                        {/* delete */}
                       {id === 'unordered' || <button className={styles.openSettingsButton} onClick={() => {deleteRow(id); setSettingsOpen(prev => !prev)}}>delete</button>}
                        <button className={styles.openSettingsButton} onClick={() => setSettingsOpen(prev => !prev)}>b</button>
                        <button className={styles.openSettingsButton} onClick={() => setSettingsOpen(prev => !prev)}>x</button></div>}
                    {collapseButton}
                </div>
            </header>
            <div className={styles.cardContainer}>
                {/* fill cards */}
                <div className={styles.cardContainerInner}>
                    <SortableContext items={itemOrder[id]} strategy={horizontalListSortingStrategy}>
                        {itemOrder[id].map(item => (
                            <CardDragWrapper key={item} id={item} parentId={id} isActive={activeId === item}>
                                <Card key={item} id={item} />
                            </CardDragWrapper>
                        ))}
                    </SortableContext>
                    {itemOrder[id].length === 0 && id === 'unordered' ?
                        <FileDropper /> : null}
                </div>
            </div>
            <div className={styles.rowController} data-collapse={drawerCollapse}>
                {collapseButton}
            </div>
        </div>
    )
}


export default index