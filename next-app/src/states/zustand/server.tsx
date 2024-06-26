import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
import { nanoid } from 'nanoid';
import { useId } from 'react';

// export let groupsGenerator = (amount): null | any => {
//     if (typeof amount !== 'number') return null;
//     if (amount < 0 || amount > 100) return null;
//     if (amount === 0) return null
//     let groups = {};
//     let names = [];
//     for (let i = 0; i < amount; i++) {
//         let id = useId();
//         let name = uniqueNamesGenerator({
//             dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
//             length: 2
//         });
//         names.push(id);
//         groups[id] = {
//             id: id,
//             title: name,
//             description: uniqueNamesGenerator({
//                 dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
//                 separator: " ",
//                 length: 3
//             }),
//         }
//     }
//     return { groups, names };
// }

// let { groups, names } = groupsGenerator(5);

export let listStructure = {
    groups: {
        'l852EhqLJGaJSysQAEbwU': {
            'id': 'l852EhqLJGaJSysQAEbwU',
            'title': 'querulous_coral',
            'description': 'delightful halibut pink'
        },
        '9RVfRrClrd5QNIpAt-AT4': {
            'id': '9RVfRrClrd5QNIpAt-AT4',
            'title': 'selfish_horse',
            'description': 'weak catshark yellow'
        },
        'g5qhJcahqko_-JHNgO9fy': {
            'id': 'g5qhJcahqko_-JHNgO9fy',
            'title': 'intellectual_finch',
            'description': 'tame sheep amaranth'
        },
        'y_4NbA4-7DV6HQmjg1rYO': {
            'id': 'y_4NbA4-7DV6HQmjg1rYO',
            'title': 'inclined_mosquito',
            'description': 'tremendous narwhal white'
        },
        'zIWgAB9XJahk7DH-xIyXh': {
            'id': 'zIWgAB9XJahk7DH-xIyXh',
            'title': 'logical_smelt',
            'description': 'useless cricket gold'
        }
    },

    groupOrder: [
        'l852EhqLJGaJSysQAEbwU',
        '9RVfRrClrd5QNIpAt-AT4',
        'g5qhJcahqko_-JHNgO9fy',
        'y_4NbA4-7DV6HQmjg1rYO',
        'zIWgAB9XJahk7DH-xIyXh'
    ]
}