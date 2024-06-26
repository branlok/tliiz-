import { useSortable } from '@dnd-kit/sortable';
import React, { PropsWithChildren } from 'react'
import { CSS } from '@dnd-kit/utilities';
import styles from './index.module.css'
type Props = { id: string, isActive: boolean, activeAttribute?: boolean, parentId: string }

function CardDragWrapper({ id, isActive, children, activeAttribute = false, parentId }: PropsWithChildren<Props>) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: id, data: { type: "card", parentId }
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isActive ? 0 : 1,
        // settngs below to make  ipad test work
        // height: "100%", 
        // aspectRatio: "1 / 1"
    };

    return (
        <div ref={setNodeRef} data-active={activeAttribute} style={style} className={styles.wrapperExclusive} {...attributes} {...listeners} >
            {children}
        </div>
    );
}

export default CardDragWrapper