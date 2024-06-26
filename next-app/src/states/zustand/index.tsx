
import { createStore } from 'zustand/vanilla'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { nanoid } from 'nanoid'

// utils:
/*
- add row to bottom
- remove any row
*/

// need a way to dynamically fill initialState

/*

- initialState (Server Supplied)
- Empty Placeholder
- Client Supplied

*/

let configStore = {
    list: {
        expand: ["all", 'custom', 'last-only'],
    }
}
export let newClientStore = {
    items: {
        '001': {
            id: '001',
            title: 'anime',
            subtitle: 'animeSubtitle',
            media: {
                image: 'https://placehold.co/600x400?text=Hello+World'
            }
        },
        '002': {
            id: '002',
            title: 'Eggs',
            subtitle: 'I love Eggs',
            media: {
                image: 'https://placehold.co/600x400?text=Hello+World'
            }
        },
        '003': {
            id: '003',
            title: 'Green',
            subtitle: 'Green Thigns',
            media: {
                image: 'https://placehold.co/600x400?text=Hello+World'
            }
        },
        '004': {
            id: '004',
            title: 'Beans',
            subtitle: 'Beans Thigns',
            media: {
                image: 'https://placehold.co/600x400?text=Hello+World'
            }
        },
        '005': {
            id: '005',
            title: 'Beans 2',
            subtitle: 'Beans Thigns 2',
            media: {
                image: 'https://placehold.co/600x400?text=Hello+World'
            }
        },
        '006': {
            id: '005',
            title: 'Beans 3',
            subtitle: 'Beans Thigns 3',
            media: {
                image: 'https://placehold.co/600x400?text=Hello+World'
            }
        }
    },
    groups: {
        'tierSSS': {
            'id': 'tierSSS',
            'title': 'Tier SSS',
            'description': 'For rank SSS',
            'viewPreference': {
                drawerCollapse: true
            }
        },
        'tierSS': {
            'id': 'TierSS',
            'title': 'Tier SS',
            'description': 'For rank SS',
            'viewPreference': {
                drawerCollapse: true
            }
        },
        'tierS': {
            'id': 'tierS',
            'title': 'Tier S',
            'description': 'For rank S',
            'viewPreference': {
                drawerCollapse: true
            }
        },
        'tierA': {
            'id': 'tier A',
            'title': 'Tier A',
            'description': 'For rank A',
            'viewPreference': {
                drawerCollapse: true
            }
        },
        'tierB': {
            'id': 'tier B',
            'title': 'Tier B',
            'description': 'For rank B',
            'viewPreference': {
                drawerCollapse: true
            }
        },
        'tierC': {
            'id': 'tier C',
            'title': 'Tier C',
            'description': 'For rank C',
            'viewPreference': {
                drawerCollapse: false
            }
        },
    },
    groupOrder: ['tierSSS', 'tierSS', 'tierS', 'tierA', 'tierB', 'tierC'],
    itemOrder: {
        'tierSSS': ['001'],
        'tierSS': [],
        'tierS': [],
        'tierA': [],
        'tierB': [],
        'tierC': ['002', '003', '004', '005', '006'],
    },
}


export const createListStructure = (initialState) => {
    return createStore()(persist(immer((set) => ({
        ...initialState,
        addNewItem: (name, subtitle = 'notitle', imgSrc = 'https://cdn.donmai.us/sample/40/30/sample-403013d006428ea04c25aa095dbe4809.jpg') => set((state) => {
            // insert to last row
            let id = nanoid();
            state.items[id] = {
                id: id,
                title: name,
                subtitle: subtitle,
                media: {
                    image: 'https://cdn.donmai.us/sample/40/30/sample-403013d006428ea04c25aa095dbe4809.jpg'
                },
            }
            let lastRow = state.groupOrder[state.groupOrder.length - 1]
            if (lastRow) {
                state.itemOrder[lastRow].push(id);
            }
        }),
        expandAllRows: () => set((state) => {
            for (let item in state.groups) {
                state.groups[item].viewPreference.drawerCollapse = false;
            }
        }),
        collapseAllRows: () => set((state) => {
            for (let item in state.groups) {
                state.groups[item].viewPreference.drawerCollapse = true;
            }
        }),
        OpenOnlyLastRow: () => set((state) => {
            for (let item in state.groups) {
                state.groups[item].viewPreference.drawerCollapse = true;
            }
            state.groups[state.groupOrder[state.groupOrder.length - 1]].viewPreference.drawerCollapse = false;
        }),
        toggleRowCollapse: (rowId) => set((state) => {
            state.groups[rowId].viewPreference.drawerCollapse = !state.groups[rowId].viewPreference.drawerCollapse;
        }),
        changeRowOrder: (activeId, overId) => set((state) => {
            let dragIdx = state.groupOrder.indexOf(activeId);
            let overIdx = state.groupOrder.indexOf(overId);
            let target = state.groupOrder.splice(dragIdx, 1);
            state.groupOrder.splice(overIdx, 0, ...target);
        }),
        changeCardSameRow: (activeId, overId, rowId) => set((state) => {
            let dragIdx = state.itemOrder[rowId].indexOf(activeId);
            let overIdx = state.itemOrder[rowId].indexOf(overId);
            let target = state.itemOrder[rowId].splice(dragIdx, 1);
            state.itemOrder[rowId].splice(overIdx, 0, ...target);
        }),
        changeCardDiffRow: (activeId, overId, activeRowId, overRowId) => set((state) => {
            let dragIdx = state.itemOrder[activeRowId].indexOf(activeId);
            let overIdx = state.itemOrder[overRowId].indexOf(overId);
            let target = state.itemOrder[activeRowId].splice(dragIdx, 1);
            state.itemOrder[overRowId].splice(overIdx, 0, ...target);
        }),
        pushCardToNewRow: (activeId, activeRowId, overRowId) => set((state) => {
            let dragIdx = state.itemOrder[activeRowId].indexOf(activeId);
            let target = state.itemOrder[activeRowId].splice(dragIdx, 1);
            state.itemOrder[overRowId].push(...target);
        }),
    })), {
        name: 'tierlist', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }))
}





