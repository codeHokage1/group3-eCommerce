import buns from './images/buns.png'; // for dry and baking
import chickenleg from './images/chickenleg.png'; // for frozen foods
import broccoli from './images/broccoli.png'; //for vegetables
import snickers from './images/snickers.png'; //for snacks
import pringles from './images/pringles.png'; //for canned foods
import rice from './images/rice.png'; //for grains
import milo from './images/milo.jpg'; //for beverages
import blueband from './images/blueband.jpg'; //for dairy


const Categoriesdata = [
    {
        name: "beverages",
        products: [ 
            {
                id: 1,
                name: "Milo",
                price: 109.95,
                description: "You can eat it",
                category: "beverages",
                image: milo,
                rating: {
                    rate: 3.9,
                    count: 120
                }
            },
            {
                id: 2,
                name: "Bournvita",
                price: 22.3,
                description: "You can eat it",
                category: "beverages",
                image: milo,
                rating: {
                    rate: 4.1,
                    count: 259
                }
            },
            {
                id: 3,
                name: "Nescafe",
                price: 55.99,
                description: "You can eat it",
                category: "beverages",
                image: milo,
                rating: {
                    rate: 4.7,
                    count: 500
                }
            },
            {
                id: 4,
                name: "Ovaltine",
                price: 15.99,
                description: "You can eat it",
                category: "beverages",
                image: milo,
                rating: {
                    rate: 2.1,
                    count: 430
                }
            },
            {
                id: 5,
                name: "Cowbell Choco",
                price: 695,
                description: "You can eat it",
                category: "beverages",
                image: milo,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
        ]
    },
    {
        name: "dairy",
        products: [
            {
                id: 6,
                name: "Jago Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: blueband,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
            {
                id: 7,
                name: "Dano Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: blueband,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
            {
                id: 8,
                name: "Loya Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: blueband,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
            {
                id: 9,
                name: "Big Tin Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: blueband,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
            {
                id: 10,
                name: "Big Loya Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: blueband,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
        ]
    },
    {
        name: "grains",
        products: [
            {
                id: 11,
                name: "CAP rice",
                price: 695,
                description: "You can eat it",
                category: "grains",
                image: rice,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
            {
                id: 12,
                name: "Stallion Rice",
                price: 695,
                description: "You can eat it",
                category: "grains",
                image: rice,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
            {
                id: 13,
                name: "Nigerian Rice",
                price: 695,
                description: "You can eat it",
                category: "grains",
                image: rice,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
        ]
    },
    {
        name: "canned foods",
        products: [
            {
                id: 14,
                name: "Pringles",
                price: 695,
                description: "You can eat it",
                category: "canned food",
                image: pringles,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
            {
                id: 15,
                name: "Titus Sardine",
                price: 695,
                description: "You can eat it",
                category: "canned food",
                image: pringles,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
            {
                id: 16,
                name: "HotDogs",
                price: 695,
                description: "You can eat it",
                category: "canned food",
                image: pringles,
                rating: {
                    rate: 4.6,
                    count: 400
                }
            },
        ]
    },
    {
        name: "canned foods",
        products: [ {
            id: 17,
            name: "Snickers",
            price: 695,
            description: "You can eat it",
            category: "snacks",
            image: snickers,
            rating: {
                rate: 4.6,
                count: 400
            }
        },
        {
            id: 18,
            name: "Crunchy",
            price: 695,
            description: "You can eat it",
            category: "snacks",
            image: snickers,
            rating: {
                rate: 4.6,
                count: 400
            }
        },
        {
            id: 19,
            name: "Oreos",
            price: 695,
            description: "You can eat it",
            category: "snacks",
            image: snickers,
            rating: {
                rate: 4.6,
                count: 400
            }
        }]
    },

]

export default Categoriesdata;

// const products = [
//     {
//         beverage: [
//             {
//                 id: 1,
//                 name: "Milo",
//                 price: 109.95,
//                 description: "You can eat it",
//                 category: "beverages",
//                 image: milo,
//                 rating: {
//                     rate: 3.9,
//                     count: 120
//                 }
//             },
//             {
//                 id: 2,
//                 name: "Bournvita",
//                 price: 22.3,
//                 description: "You can eat it",
//                 category: "beverages",
//                 image: milo,
//                 rating: {
//                     rate: 4.1,
//                     count: 259
//                 }
//             },
//             {
//                 id: 3,
//                 name: "Nescafe",
//                 price: 55.99,
//                 description: "You can eat it",
//                 category: "beverages",
//                 image: milo,
//                 rating: {
//                     rate: 4.7,
//                     count: 500
//                 }
//             },
//             {
//                 id: 4,
//                 name: "Ovaltine",
//                 price: 15.99,
//                 description: "You can eat it",
//                 category: "beverages",
//                 image: milo,
//                 rating: {
//                     rate: 2.1,
//                     count: 430
//                 }
//             },
//             {
//                 id: 5,
//                 name: "Cowbell Choco",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "beverages",
//                 image: milo,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             }
//         ]
//     },
//     {
//         dairy: [
//             {
//                 id: 6,
//                 name: "Jago Milk",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "dairy",
//                 image: blueband,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 7,
//                 name: "Dano Milk",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "dairy",
//                 image: blueband,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 8,
//                 name: "Loya Milk",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "dairy",
//                 image: blueband,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 9,
//                 name: "Big Tin Milk",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "dairy",
//                 image: blueband,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 10,
//                 name: "Big Loya Milk",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "dairy",
//                 image: blueband,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             }
//         ]
//     },
//     {
//         grains: [
//             {
//                 id: 11,
//                 name: "CAP rice",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "grains",
//                 image: rice,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 12,
//                 name: "Stallion Rice",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "grains",
//                 image: rice,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 13,
//                 name: "Nigerian Rice",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "grains",
//                 image: rice,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             }
//         ]
//     },
//     {
//         "canned foods": [
//             {
//                 id: 14,
//                 name: "Pringles",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "canned food",
//                 image: pringles,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 15,
//                 name: "Titus Sardine",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "canned food",
//                 image: pringles,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 16,
//                 name: "HotDogs",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "canned food",
//                 image: pringles,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             }
//         ]
//     },
//     {
//         snacks: [
//             {
//                 id: 17,
//                 name: "Snickers",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "snacks",
//                 image: snickers,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 18,
//                 name: "Crunchy",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "snacks",
//                 image: snickers,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             },
//             {
//                 id: 19,
//                 name: "Oreos",
//                 price: 695,
//                 description: "You can eat it",
//                 category: "snacks",
//                 image: snickers,
//                 rating: {
//                     rate: 4.6,
//                     count: 400
//                 }
//             }
//         ]
//     }
// ]

// export default products;




