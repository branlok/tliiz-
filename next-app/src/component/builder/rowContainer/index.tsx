import React, { ReactElement } from 'react'
import styles from './index.module.css';
import Row from './row';
import { useCounterStore } from '../../../states/zustand/provider';
import RowDragWrapper from './row/rowDragWrapper';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';



//logic for generating rows
/**
 * @description holds row logic
 * @param param0 
 * @returns 
 */
function index({ activeId }: Props) {
    const { groups, groupOrder, addNewItem } = useCounterStore(
        (state) => state,
    )

    return (
        <div className={styles.rowWrapper}>
            {/* <button onClick={() => addNewItem('hello')}>create</button> */}
            <SortableContext items={groupOrder} strategy={verticalListSortingStrategy}>
                {groupOrder.map((item) => {
                    return (
                        <RowDragWrapper key={item} groupId={item} isActive={activeId === item}>
                            <Row name={groups[item].title} id={item} activeId={activeId} />
                        </RowDragWrapper>
                    )
                })}
            </SortableContext>
        </div>
    )
}


export default index