import React, { ReactElement } from 'react'
import styles from './index.module.css';
import Row from './row';
import { useCounterStore } from '../../../states/zustand/provider';
import RowDragWrapper from './row/rowDragWrapper';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import AddNewRowForm from './rowOptions/AddNewRowForm';

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
    console.log(groups.unordered.title);
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
                {/* only unorder show have visible drag and drop, main rows are implicit - to prevserve minimalism */}
                {groups.unordered && <RowDragWrapper key={'unordered'} groupId={'unordered'} isActive={activeId === 'unordered'}>
                    <Row name={groups.unordered.title} id={'unordered'} activeId={activeId} />
                </RowDragWrapper>}

            </SortableContext>
            <div className={styles.rowOptionsWrapper}>
                <AddNewRowForm />
            </div>
        </div>
    )
}


export default index