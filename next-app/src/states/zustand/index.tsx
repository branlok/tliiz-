
import { createStore } from 'zustand/vanilla'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { nanoid } from 'nanoid'
import { db } from '../../dexie'

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
            title: 'Lorem ipsum dolor sit amet and',
            subtitle: 'animeSubtitle',
            media: {
                image: 'https://cdn.donmai.us/sample/91/ae/sample-91ae59b9818aa3cff6c2af850e10a76c.jpg'
            }
        },
        '002': {
            id: '002',
            title: 'Eggs',
            subtitle: 'I love Eggs',
            media: {
                image: 'https://cdn.donmai.us/sample/e1/20/sample-e12065f785802c1e1d5fd0d1abf8e96a.jpg'
            }
        },
        '003': {
            id: '003',
            title: 'Green',
            subtitle: 'Green Thigns',
            media: {
                image: 'https://cdn.donmai.us/sample/07/8f/sample-078fa8ceba602585aa24142cc2c65155.jpg'
            }
        },
        '004': {
            id: '004',
            title: 'Beans',
            subtitle: 'Beans Thigns',
            media: {
                image: 'https://cdn.donmai.us/sample/e1/6f/sample-e16f9e96f926686b49ce21f97500a369.jpg'
            }
        },
        '005': {
            id: '005',
            title: 'Beans 2',
            subtitle: 'Beans Thigns 2',
            media: {
                image: 'https://cdn.donmai.us/sample/6f/7f/sample-6f7f7b6b065702720d6ee95bd373a4f7.jpg'
            }
        },
        '006': {
            id: '006',
            title: 'Beans 3',
            subtitle: 'Beans Thigns 3',
            media: {
                image: 'https://cdn.donmai.us/sample/06/b7/sample-06b7b125210b0d5a87d65a6e162445af.jpg'
            }
        },
        '007': {
            id: '007',
            title: 'Beans 4',
            subtitle: 'Beans Thigns 3',
            media: {
                image: 'https://cdn.donmai.us/sample/01/51/sample-015184ad9349e766292297113cc0430a.jpg'
            }
        }
    },
    groups: {
        'tierSSS': {
            'id': 'tierSSS',
            'title': 'Lorem ipsum dolor sit amet and',
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
    groupOrder: ['tierSSS', 'tierSS', 'tierS', 'tierA'],
    itemOrder: {
        'tierSSS': ['001'],
        'tierSS': [],
        'tierS': [],
        'tierA': ['002', '003', '004', '005', '006'],
    },
}


export const createListStructure = (initialState) => {
    return createStore()(persist(immer((set) => ({
        ...initialState,
        addNewItem: (id = nanoid(), name = 'untitled', subtitle = 'notitle', imgSrc = 'https://cdn.donmai.us/sample/40/30/sample-403013d006428ea04c25aa095dbe4809.jpg') => set((state) => {
            // insert to last row
            console.log(id);
            state.items[id] = {
                id: id,
                title: name,
                subtitle: subtitle,
                media: {
                    image: imgSrc,
                    local: true
                },
            }
            let lastRow = state.groupOrder[state.groupOrder.length - 1]
            if (lastRow) {
                state.itemOrder[lastRow].push(id);
            }
        }),
        updateImageUrl: (id, url) => set((state) => {
            state.items[id].media.image = url;
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
        version: 7,
        // skipHydration: true,
        onRehydrateStorage: () => (state) => {

            (async () => {
                for (let item in state.items) {
                    if (state.items[item].media.local) {
                        try {
                            let card = await db.friends.get({ id: parseInt(item) });
                            // console.log(URL.createObjectURL(new File([card.image], '')));
                            // state.items[item].media.image = URL.createObjectURL(new File([card.image], ''));
                            state.updateImageUrl(item, URL.createObjectURL(new File([card.image], '')));
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }
            })()
            console.log('hydration finished')
            return (state, error) => {
                if (error) {
                    console.log('an error happened during hydration', error)
                } else {
                    console.log('hydration finished')
                }
            }

        },

    }))
}





