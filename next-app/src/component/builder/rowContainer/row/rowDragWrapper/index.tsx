import { useSortable } from '@dnd-kit/sortable';
import React, { PropsWithChildren } from 'react'
import { CSS } from '@dnd-kit/utilities';
import styles from './styles.module.css';
type Props = {
    groupId: string,
    isActive: boolean
    activeAttribute?: boolean
}

function RowDragWrapper({ children, groupId, isActive, activeAttribute = false }: PropsWithChildren<Props>) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isOver,
        over,
    } = useSortable({
        id: groupId, data: { type: "group" },
        disabled: true
    });
    const style = {
        transform: CSS.Translate.toString(transform),
        // to prevent unncessary renders of rows when an item is dragged.
        transition: transform ? transition : '',
        opacity: isActive ? '0' : '1',
        // '--highlight-color': isOver ? 'red' : 'black'
    };
    return (
        <div ref={setNodeRef} data-active={activeAttribute} style={style} className={(isOver || (over?.data?.current?.parentId == groupId)) ? styles.wrapperOver : styles.wrapper} {...attributes} data-hover={isOver} >
            {children}
        </div>
    )
}

export default RowDragWrapper