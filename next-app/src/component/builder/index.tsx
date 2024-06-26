import React, { useState } from 'react'
import styles from './index.module.css';
import Header from './header';
import RowContainer from './rowContainer';
import { DndContext, DragOverlay, KeyboardSensor, MouseSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import Row from './rowContainer/row';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useCounterStore } from '../../states/zustand/provider';
import Card from './rowContainer/row/card';
type Props = {}

import { CSS } from '@dnd-kit/utilities';

const customDropAnimation = {
    keyframes({ transform }) {
        return [
            { opacity: 1, transform: CSS.Transform.toString(transform.initial) },
            { opacity: 0, transform: CSS.Transform.toString(transform.final) },
        ];
    },
};




function shouldHandleEvent(element: HTMLElement | null) {
    let cur = element
    while (cur) {
        if (cur.dataset && cur.dataset.noDnd) {
            return false
        }
        cur = cur.parentElement
    }
    return true
}

class MyPointerSensor extends PointerSensor {
    static activators = [
        {
            eventName: 'onPointerDown',
            handler: ({ nativeEvent: event }: { nativeEvent: Event }) => {
                return shouldHandleEvent(event.target as HTMLElement)
            },
        },

    ];

}


function index({ options }: Props) {
    // How to get data

    // LocalStorage
    // ServerStorage

    // if parent pass in data, use that.
    // if no data from parents, we will use dixie.js


    // if its client side it will be rendered on client side lol.
    // populate zustand

    // New Document - Make base on a Preset
    // Existing Document
    // - From Server
    // - From Client's own Browser


    let [activeId, setActiveId] = useState(null);

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 1,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
        useSensor(TouchSensor, {
            // Press delay of 250ms, with tolerance of 5px of movement
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        })
    );

    

    const { changeRowOrder, changeCardSameRow, changeCardDiffRow, pushCardToNewRow, groupOrder, items } = useCounterStore(
        (state) => state,
    )


    let onDragEndHandler = (event) => {
        const { active, over } = event;
        if (active === null || over === null) return
        let activeId = active.id;
        let overId = over.id;
        let activeType = active?.data?.current?.type;
        let overType = over?.data?.current?.type;


        if (activeType === "group") {
            changeRowOrder(activeId, overId);
        } else if (activeType === "card") {
            //changeItemOnSameRow
            let parentId = active.data.current.parentId;
            let overParentId = over.data.current.parentId;
            if (parentId === overParentId) {
                changeCardSameRow(activeId, overId, parentId)
            } else if (parentId && overType === "group") {
                let targetContainerId = overId;
                pushCardToNewRow(activeId, parentId, targetContainerId)
            } else if (parentId !== overParentId && overType === "card") {
                changeCardDiffRow(activeId, overId, parentId, overParentId)
            }
        }
        setActiveId(null);
    }
    let onDragOverHandler = (event) => {
        const { active, over } = event;
        if (active === null || over === null) return
        let activeId = active.id;
        let overId = over.id;
        let activeType = active?.data?.current?.type;
        let overType = over?.data?.current?.type;


        if (activeType === "group") {
            changeRowOrder(activeId, overId);
        } else if (activeType === "card") {
            //changeItemOnSameRow
            let parentId = active.data.current.parentId;
            let overParentId = over.data.current.parentId;
            if (parentId === overParentId) {
                changeCardSameRow(activeId, overId, parentId)
            } else if (parentId && overType === "group") {
                let targetContainerId = overId;
                pushCardToNewRow(activeId, parentId, targetContainerId)
            } else if (parentId !== overParentId && overType === "card") {
                changeCardDiffRow(activeId, overId, parentId, overParentId)
            }
        }

    }

    return (
        <div className={styles.listWrapper}>
            {/* Header Row: Title, Actions*/}
            <Header />
            <DndContext id="builder-dnd"
                onDragStart={({ active }) => setActiveId(active.id as string)}
                onDragEnd={(event) => onDragEndHandler(event)}
                onDragOver={(event) => onDragOverHandler(event)}
                sensors={sensors}
            >
                <RowContainer activeId={activeId} />
                <DragOverlay  dropAnimation={null}>
                    {activeId && groupOrder.includes(activeId) && <Row id={activeId} />}
                    {activeId && items[activeId] && <Card id={activeId} />}
                    {/* {activeId && <Row id={activeId} />} */}
                </DragOverlay>
            </DndContext>



            {/* <Header /> */}
            {/* Rows */}
            {/* Miscellaneous Footer Metadata */}
        </div>
    )
}

export default index