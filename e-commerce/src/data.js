import buns from './images/buns.png'; // for dry and baking
import chickenleg from './images/chickenleg.png'; // for frozen foods
import broccoli from './images/broccoli.png'; //for vegetables
import snickers from './images/snickers.png'; //for snacks
// import pringles from './images/pringles.png'; //for canned foods
import rice from './images/rice.png'; //for grains
import milo from './images/milo.jpg'; //for beverages
import blueband from './images/blueband.jpg'; //for dairy
import pringles from './images/cannedfoods/pringles.png'
import sardine from './images/cannedfoods/sardine.png'
import meatballs from './images/cannedfoods/meatballs.png'
import sweetcorn from './images/cannedfoods/sweetcorn.png'
import bakedbeans from './images/cannedfoods/bakedbeans.png';
import greenbeans from './images/cannedfoods/greenbeans.png'
import tomatoes from './images/cannedfoods/tomatoes.png'
import sausage from './images/cannedfoods/sausage.png'
import cornbeef from './images/cannedfoods/cornbeef.png'
import potatoes from './images/cannedfoods/potatoes.png'

import bournvita from './images/beverages/bournvita.png'
import coke from './images/beverages/coke.png'
import cowbell from './images/beverages/cowbell.png'
import fanta from './images/beverages/fanta.png'
import nescafe from './images/beverages/nescafe.png'
import ovaltine from './images/beverages/ovaltine.png'
import smoov from './images/beverages/smoov.png'
import soymilk from './images/beverages/soymilk.png'
import sprite from './images/beverages/sprite.png'
import vijumilk from './images/beverages/vijumilk.png'

import almondmilk from './images/Dairy/almondmilk.png'
import butter from './images/Dairy/butter.png'
import coffeecream from './images/Dairy/coffeecream.png'
import dairymilk from './images/Dairy/dairymilk.png'
import freshyo from './images/Dairy/freshyo.png'
import goatmilk from './images/Dairy/goatmilk.png'
import margarine from './images/Dairy/margarine.png'
import mayonnaise from './images/Dairy/mayonaise.png'
import oatmilk from './images/Dairy/oatmilk.png'
import yoghurt from './images/Dairy/yoghurt.png'

import bakingpowder from './images/bakery/bakingpowder.png'
import bakingsoda from './images/bakery/bakingsoda.png'
import drynuts from './images/bakery/drynuts.png'
import eggs from './images/bakery/eggs.png'
import flour from './images/bakery/flour.png'
import icingsugar from './images/bakery/icingsugar.png'
import measuringcups from './images/bakery/measuringcups.png'
import syrup from './images/bakery/syrup.png'
import whipcream from './images/bakery/whipcream.png'
import yeast from './images/bakery/yeast.png'













const Categoriesdata = [
    {
        name: "canned foods",
        products: [
            {
                id: 101,
                name: "Pringles",
                price: 200,
                description: "You can eat it",
                category: "canned food",
                image: pringles,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "20%"
            },
            {
                id: 102,
                name: "Titus Sardine",
                price: 695,
                description: "You can eat it",
                category: "canned food",
                image: sardine,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "15%"
            },
            {
                id: 103,
                name: "Meat balls",
                price: 126,
                description: "You can eat it",
                category: "canned food",
                image: meatballs,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "10%"
            },
            {
                id: 104,
                name: "Sweet Corn",
                price: 67,
                description: "You can eat it",
                category: "canned food",
                image: sweetcorn,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "11%"
            },
            {
                id: 105,
                name: "Baked Beans",
                price: 248,
                description: "You can eat it",
                category: "canned food",
                image: bakedbeans,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "12%"
            },
            {
                id: 106,
                name: "Potatoes",
                price: 226,
                description: "You can eat it",
                category: "canned food",
                image: potatoes,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "19%"
            },
            {
                id: 107,
                name: "Green Beans",
                price: 226,
                description: "You can eat it",
                category: "canned food",
                image: greenbeans,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "25%"
            },
            {
                id: 108,
                name: "Sausage",
                price: 226,
                description: "You can eat it",
                category: "canned food",
                image: sausage,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "15%"
            },
            {
                id: 109,
                name: "Tomatoes",
                price: 226,
                description: "You can eat it",
                category: "canned food",
                image: tomatoes,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "20%"
            },
            {
                id: 110,
                name: "Corned Beef",
                price: 226,
                description: "You can eat it",
                category: "canned food",
                image: cornbeef,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "25%"
            },
        ]
    },
    {
        name: "beverages",
        products: [ 
            {
                id: 301,
                name: "Ovaltine",
                price: 109.95,
                description: "You can eat it",
                category: "beverages",
                image: ovaltine,
                rating: {
                    rate: 3.9,
                    count: 120
                },
                discount: "5%"
            },
            {
                id: 302,
                name: "Bournvita",
                price: 22.3,
                description: "You can eat it",
                category: "beverages",
                image: bournvita,
                rating: {
                    rate: 4.1,
                    count: 259
                },
                discount: "10%"
            },
            {
                id: 303,
                name: "Nescafe",
                price: 55.99,
                description: "You can eat it",
                category: "beverages",
                image: nescafe,
                rating: {
                    rate: 4.7,
                    count: 500
                },
                discount: "15%"
            },
            {
                id:304,
                name: "fanta",
                price: 15.99,
                description: "You can eat it",
                category: "beverages",
                image: fanta,
                rating: {
                    rate: 2.1,
                    count: 430
                },
                discount: "20%"
            },
            {
                id: 305,
                name: "Cowbell Milk",
                price: 20.99,
                description: "You can eat it",
                category: "beverages",
                image: cowbell,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "25%"
            },
            {
                id: 306,
                name: "Coke",
                price: 695,
                description: "You can eat it",
                category: "beverages",
                image: coke,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "5%"
            },
            {
                id: 307,
                name: "Smoov",
                price: 695,
                description: "You can eat it",
                category: "beverages",
                image: smoov,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "10%"
            },
            {
                id: 308,
                name: "Sprite",
                price: 695,
                description: "You can eat it",
                category: "beverages",
                image: sprite,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "15%"
            },
            {
                id: 309,
                name: "soymilk",
                price: 695,
                description: "You can eat it",
                category: "beverages",
                image: soymilk,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "20%"
            },
            {
                id: 310,
                name: "Viju Milk ",
                price: 695,
                description: "You can eat it",
                category: "beverages",
                image: vijumilk,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "25%"
            }
        ]
    },
    {
        name: "dairy",
        products: [
            {
                id: 401,
                name: "Almond Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: almondmilk,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "5%"
            },
            {
                id: 402,
                name: "Coffee Creamer",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: coffeecream,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "10%"
            },
            {
                id: 403,
                name: "Dairy Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: dairymilk,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "10%"
            },
            {
                id: 404,
                name: "Goat Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: goatmilk,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "15%"
            },
            {
                id: 405,
                name: "Yoghurt",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: yoghurt,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "20%"
            },
            {
                id: 406,
                name: "Butter",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: butter,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "25%"
            },
            {
                id: 407,
                name: "Margarine",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: margarine,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "5%"
            },
            {
                id: 408,
                name: "Oat Milk",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: oatmilk,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "25%"
            },
            {
                id: 409,
                name: "Mayonnaise",
                price: 695,
                description: "You can eat it",
                category: "dairy",
                image: mayonnaise,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "20%"
            },
            {
                id: 410,
                name: "Freshyo",
                price: 695,
                description: "You can eat it",
                category: "butter",
                image: freshyo,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "15%"
            },
        ]
    },
    {
        name: "bakery",
        products: [
            {
                id: 201,
                name: "Baking Powder",
                price: 95,
                description: "You can eat it",
                category: "bakery",
                image: bakingpowder,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "5%"
            },
            {
                id: 202,
                name: "Baking Soda",
                price: 69,
                description: "You can eat it",
                category: "bakery",
                image: bakingsoda,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "10%"
            },
            {
                id: 203,
                name: "Dry Nuts",
                price: 395,
                description: "You can eat it",
                category: "bakery",
                image: drynuts,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "15%"
            },
            {
                id: 204,
                name: "Eggs",
                price: 65,
                description: "You can eat it",
                category: "bakery",
                image: eggs,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "20%"
            },
            {
                id: 205,
                name: "Flour",
                price: 55,
                description: "You can eat it",
                category: "bakery",
                image: flour,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "25%"
            },
            {
                id: 206,
                name: "Icing Sugar",
                price: 32,
                description: "You can eat it",
                category: "bakery",
                image: icingsugar,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "5%"
            },
            {
                id: 207,
                name: "Measuring Cups",
                price: 54,
                description: "You can eat it",
                category: "bakery",
                image: measuringcups,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "10%"
            },
            {
                id: 208,
                name: "Syrup",
                price: 90,
                description: "You can eat it",
                category: "bakery",
                image: syrup,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "15%"
            },
            {
                id: 209,
                name: "Whipped Cream",
                price: 695,
                description: "You can eat it",
                category: "bakery",
                image: whipcream,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "20%"
            },
            {
                id: 210,
                name: "Yeast",
                price: 695,
                description: "You can eat it",
                category: "bakery",
                image: yeast,
                rating: {
                    rate: 4.6,
                    count: 400
                },
                discount: "20%"
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




// [
//     {
//         id: 1,
//         name: "Milo",
//         price: 109.95,
//         description: "You can eat it",
//         category: "beverages",
//         image: milo,
//         rating: {
//             rate: 3.9,
//             count: 120
//         }
//     },
//     {
//         id: 2,
//         name: "Bournvita",
//         price: 22.3,
//         description: "You can eat it",
//         category: "beverages",
//         image: milo,
//         rating: {
//             rate: 4.1,
//             count: 259
//         }
//     },
//     {
//         id: 3,
//         name: "Nescafe",
//         price: 55.99,
//         description: "You can eat it",
//         category: "beverages",
//         image: milo,
//         rating: {
//             rate: 4.7,
//             count: 500
//         }
//     },
//     {
//         id: 4,
//         name: "Ovaltine",
//         price: 15.99,
//         description: "You can eat it",
//         category: "beverages",
//         image: milo,
//         rating: {
//             rate: 2.1,
//             count: 430
//         }
//     },
//     {
//         id: 5,
//         name: "Cowbell Choco",
//         price: 695,
//         description: "You can eat it",
//         category: "beverages",
//         image: milo,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 6,
//         name: "Jago Milk",
//         price: 695,
//         description: "You can eat it",
//         category: "dairy",
//         image: blueband,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 7,
//         name: "Dano Milk",
//         price: 695,
//         description: "You can eat it",
//         category: "dairy",
//         image: blueband,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 8,
//         name: "Loya Milk",
//         price: 695,
//         description: "You can eat it",
//         category: "dairy",
//         image: blueband,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 9,
//         name: "Big Tin Milk",
//         price: 695,
//         description: "You can eat it",
//         category: "dairy",
//         image: blueband,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 10,
//         name: "Big Loya Milk",
//         price: 695,
//         description: "You can eat it",
//         category: "dairy",
//         image: blueband,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 11,
//         name: "CAP rice",
//         price: 695,
//         description: "You can eat it",
//         category: "grains",
//         image: rice,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 12,
//         name: "Stallion Rice",
//         price: 695,
//         description: "You can eat it",
//         category: "grains",
//         image: rice,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 13,
//         name: "Nigerian Rice",
//         price: 695,
//         description: "You can eat it",
//         category: "grains",
//         image: rice,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 14,
//         name: "Pringles",
//         price: 695,
//         description: "You can eat it",
//         category: "canned food",
//         image: pringles,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 15,
//         name: "Titus Sardine",
//         price: 695,
//         description: "You can eat it",
//         category: "canned food",
//         image: pringles,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 16,
//         name: "HotDogs",
//         price: 695,
//         description: "You can eat it",
//         category: "canned food",
//         image: pringles,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 17,
//         name: "Snickers",
//         price: 695,
//         description: "You can eat it",
//         category: "snacks",
//         image: snickers,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 18,
//         name: "Crunchy",
//         price: 695,
//         description: "You can eat it",
//         category: "snacks",
//         image: snickers,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     },
//     {
//         id: 19,
//         name: "Oreos",
//         price: 695,
//         description: "You can eat it",
//         category: "snacks",
//         image: snickers,
//         rating: {
//             rate: 4.6,
//             count: 400
//         }
//     }
// ]