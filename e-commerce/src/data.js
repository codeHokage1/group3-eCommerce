import buns from './images/buns.png' // for dry and baking
import chickenleg from './images/chickenleg.png' // for frozen foods
import broccoli from './images/broccoli.png' //for vegetables
import snickers from './images/snickers.png' //for snacks
import pringles from './images/pringles.png' //for canned foods
import rice from './images/rice.png' //for grains
import milo from './images/milo.jpg' //for beverages
import blueband from './images/blueband.jpg' //for dairy
// for frozen foods
import chickendrum from './images/frozenfood/chickendrum.png'
import chickleg from './images/frozenfood/chickenleg.png'
import chickenwings from './images/frozenfood/frozen_chicken.png'
import turkey from './images/frozenfood/Frozen-Turkey.png'
import hakefish from './images/frozenfood/hake-fish.png'
import ham from './images/frozenfood/Ham.png'
import mincedbeef from './images/frozenfood/minced-beef.png'
import salmon from './images/frozenfood/salmon.png'
import sausage from './images/frozenfood/sausage.png'
import titus from './images/frozenfood/titus.png'
// for grains
import brownrice from './images/grains/brownrice.png'
import lentils from './images/grains/lentils.png'
import oats from './images/grains/oats.png'
import ofadarice from './images/grains/ofadrice.png'
import garri from './images/grains/original_garri.png'
import ricegrain from './images/grains/rice-grain.png'
import semo from './images/grains/semovita.png'
import sunbrownrice from './images/grains/sunbrownrice.png'
import wheat from './images/grains/wheat.png'
// for snacks
import cashewnut from './images/snacks/cashewnut.png'
import cheeseball from './images/snacks/cheeseball.png'
import hazelnut from './images/snacks/Hazelnut.png'
import hotnspice from './images/snacks/hotnspice.png'
import kenkey from './images/snacks/kenkey.png'
import popcorn from './images/snacks/popcorn.png'
import normalpringles from './images/snacks/pringles.png'
import tortillachips from './images/snacks/tortillachips.png'
import ukwasnack from './images/snacks/ukwasnack.png'
import walnut from './images/snacks/walnut.png'
import welch from './images/snacks/welch.png'
//for vegetables
import asparagus from './images/vegetables/asparagus.png'
import bittergourd from './images/vegetables/bitter-gourd.png'
import cabbage from './images/vegetables/cabbage.png'
import cucumber from './images/vegetables/cucumber.png'
import kale from './images/vegetables/kale.png'
import lemongrass from './images/vegetables/lemongrass.png'
import lettuce from './images/vegetables/lettuce.png'
import marrow from './images/vegetables/marrow.png'
import onions from './images/vegetables/onions.png'
import parley from './images/vegetables/parley.png'

const Categoriesdata = [
  {
    name: 'beverages',
    products: [
      {
        id: 1,
        name: 'Milo',
        price: 109.95,
        description: 'You can eat it',
        category: 'beverages',
        image: milo,
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      {
        id: 2,
        name: 'Bournvita',
        price: 22.3,
        description: 'You can eat it',
        category: 'beverages',
        image: milo,
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
      {
        id: 3,
        name: 'Nescafe',
        price: 55.99,
        description: 'You can eat it',
        category: 'beverages',
        image: milo,
        rating: {
          rate: 4.7,
          count: 500,
        },
      },
      {
        id: 4,
        name: 'Ovaltine',
        price: 15.99,
        description: 'You can eat it',
        category: 'beverages',
        image: milo,
        rating: {
          rate: 2.1,
          count: 430,
        },
      },
      {
        id: 5,
        name: 'Cowbell Choco',
        price: 695,
        description: 'You can eat it',
        category: 'beverages',
        image: milo,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
    ],
  },
  {
    name: 'dairy',
    products: [
      {
        id: 6,
        name: 'Jago Milk',
        price: 695,
        description: 'You can eat it',
        category: 'dairy',
        image: blueband,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 7,
        name: 'Dano Milk',
        price: 695,
        description: 'You can eat it',
        category: 'dairy',
        image: blueband,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 8,
        name: 'Loya Milk',
        price: 695,
        description: 'You can eat it',
        category: 'dairy',
        image: blueband,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 9,
        name: 'Big Tin Milk',
        price: 695,
        description: 'You can eat it',
        category: 'dairy',
        image: blueband,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 10,
        name: 'Big Loya Milk',
        price: 695,
        description: 'You can eat it',
        category: 'dairy',
        image: blueband,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
    ],
  },
  {
    name: 'grains',
    products: [
      {
        id: 11,
        name: 'CAP rice',
        price: 695,
        description: 'You can eat it',
        category: 'grains',
        image: rice,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 12,
        name: 'Stallion Rice',
        price: 695,
        description: 'You can eat it',
        category: 'grains',
        image: rice,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 13,
        name: 'Nigerian Rice',
        price: 695,
        description: 'You can eat it',
        category: 'grains',
        image: rice,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
    ],
  },
  {
    name: 'canned foods',
    products: [
      {
        id: 14,
        name: 'Pringles',
        price: 695,
        description: 'You can eat it',
        category: 'canned food',
        image: pringles,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 15,
        name: 'Titus Sardine',
        price: 695,
        description: 'You can eat it',
        category: 'canned food',
        image: pringles,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 16,
        name: 'HotDogs',
        price: 695,
        description: 'You can eat it',
        category: 'canned food',
        image: pringles,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
    ],
  },
  {
    name: 'canned foods',
    products: [
      {
        id: 17,
        name: 'Snickers',
        price: 695,
        description: 'You can eat it',
        category: 'snacks',
        image: snickers,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 18,
        name: 'Crunchy',
        price: 695,
        description: 'You can eat it',
        category: 'snacks',
        image: snickers,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 19,
        name: 'Oreos',
        price: 695,
        description: 'You can eat it',
        category: 'snacks',
        image: snickers,
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
    ],
  },
  {
    name: 'Frozen food',
    products: [
      {
        id: 601,
        name: 'Chicken drum',
        price: 1800,
        description: 'The best chicken drum you can have',
        discount: 20,
        category: 'Frozen food',
        image: chickendrum,
        rating: {
          rate: 4.2,
          count: 100,
        },
      },
      {
        id: 602,
        name: 'Chicken leg',
        price: 2500,
        description: 'The best chicken leg you can have',
        discount: 30,
        category: 'Frozen food',
        image: chickleg,
        rating: {
          rate: 4.0,
          count: 200,
        },
      },
      {
        id: 603,
        name: 'Chicken wings',
        price: 1800,
        description: 'The best chicken wings you can have',
        discount: 48,
        category: 'Frozen food',
        image: chickenwings,
        rating: {
          rate: 4.2,
          count: 100,
        },
      },
      {
        id: 604,
        name: 'Turkey',
        price: 1800,
        description: 'The best thanksgiving turkey you can have',
        discount: 20,
        category: 'Frozen food',
        image: turkey,
        rating: {
          rate: 4.1,
          count: 200,
        },
      },
      {
        id: 605,
        name: 'Hake fish',
        price: 1800,
        description: 'The best Hake fish you can have',
        discount: 23,
        category: 'Frozen food',
        image: hakefish,
        rating: {
          rate: 4.2,
          count: 100,
        },
      },
      {
        id: 606,
        name: 'Ham',
        price: 1800,
        description: 'The best ham you can have',
        discount: 21,
        category: 'Frozen food',
        image: ham,
        rating: {
          rate: 4.2,
          count: 100,
        },
      },
      {
        id: 607,
        name: 'Minced beef',
        price: 1800,
        description: 'The best chicken drum you can have',
        discount: 29,
        category: 'Frozen food',
        image: mincedbeef,
        rating: {
          rate: 4.2,
          count: 100,
        },
      },
      {
        id: 608,
        name: 'Salmon',
        price: 1800,
        description: 'The best salmon you can have',
        discount: 22,
        category: 'Frozen food',
        image: salmon,
        rating: {
          rate: 4.2,
          count: 100,
        },
      },
      {
        id: 609,
        name: 'Sausage',
        price: 1800,
        description: 'The best sausage you can have',
        discount: 21,
        category: 'Frozen food',
        image: sausage,
        rating: {
          rate: 4.2,
          count: 100,
        },
      },
      {
        id: 610,
        name: 'Titus',
        price: 1800,
        description: 'The best chicken drum you can have',
        category: 'Frozen food',
        image: titus,
        rating: {
          rate: 4.2,
          count: 100,
        },
      },
    ],
  },
  {
    name: 'Grains',
    products: [
      {
        id: 801,
        name: 'Brown rice',
        price: 695,
        description: 'You can eat it',
        discount: 32,
        category: 'Grains',
        image: brownrice,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 802,
        name: 'Lentils',
        price: 6935,
        description: 'You can eat it',
        discount: 31,
        category: 'Grains',
        image: lentils,
        rating: {
          rate: 4.2,
          count: 300,
        },
      },
      {
        id: 803,
        name: 'Quaker Oats',
        price: 1532,
        description: 'You can eat it',
        discount: 14,
        category: 'Grains',
        image: oats,
        rating: {
          rate: 4.1,
          count: 200,
        },
      },
      {
        id: 804,
        name: 'Original Garri',
        price: 695,
        description: 'You can eat it',
        discount: 26,
        category: 'Grains',
        image: garri,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 805,
        name: 'Polished rice',
        price: 6395,
        description: 'You can eat it',
        discount: 20,
        category: 'Grains',
        image: ricegrain,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 806,
        name: 'Ofada rice',
        price: 6295,
        description: 'You can eat it',
        discount: 27,
        category: 'Grains',
        image: ofadarice,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 807,
        name: 'Semovita',
        price: 12695,
        description: 'You can eat it',
        discount: 26,
        category: 'Grains',
        image: semo,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 808,
        name: 'Sun Brown Rice',
        price: 6195,
        description: 'You can eat it',
        discount: 21,
        category: 'Grains',
        image: sunbrownrice,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 809,
        name: 'Wheat',
        price: 6954,
        description: 'You can eat it',
        discount: 43,
        category: 'Grains',
        image: wheat,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 810,
        name: 'Pringles',
        price: 6951,
        description: 'You can eat it',
        discount: 20,
        category: 'Grains',
        image: pringles,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
    ],
  },
  {
    name: 'Snacks',
    products: [
      {
        id: 701,
        name: 'Cashew nut',
        price: 695,
        description: 'You can eat it',
        discount: 22,
        category: 'Snacks',
        image: cashewnut,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 702,
        name: 'Cheeseball',
        price: 695,
        description: 'You can eat it',
        discount: 12,
        category: 'Snacks',
        image: cheeseball,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 703,
        name: 'Hazelnut',
        price: 695,
        description: 'You can eat it',
        discount: 14,
        category: 'Snacks',
        image: hazelnut,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 704,
        name: 'Hot and spice',
        price: 695,
        description: 'You can eat it',
        discount: 12,
        category: 'Snacks',
        image: hotnspice,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 705,
        name: 'Kenkey',
        price: 695,
        description: 'You can eat it',
        discount: 11,
        category: 'Snacks',
        image: kenkey,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 706,
        name: 'Popcorn',
        price: 695,
        description: 'You can eat it',
        discount: 32,
        category: 'Snacks',
        image: popcorn,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 707,
        name: 'Pringles',
        price: 695,
        description: 'You can eat it',
        discount: 17,
        category: 'Snacks',
        image: pringles,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 708,
        name: 'Tortilla chips',
        price: 695,
        description: 'You can eat it',
        discount: 28,
        category: 'Snacks',
        image: tortillachips,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 709,
        name: 'Ukwa snack',
        price: 695,
        description: 'You can eat it',
        discount: 25,
        category: 'Snacks',
        image: ukwasnack,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 710,
        name: 'Walnut',
        price: 695,
        description: 'You can eat it',
        discount: 14,
        category: 'Snacks',
        image: walnut,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 711,
        name: 'Welch gold fish',
        price: 695,
        description: 'You can eat it',
        discount: 25,
        category: 'Snacks',
        image: welch,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
    ],
  },
  {
    name: 'Vegetable',
    products: [
      {
        id: 501,
        name: 'Asparagus',
        price: 695,
        description: 'You can eat it',
        discount: 20,
        category: 'Snacks',
        image: asparagus,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 502,
        name: 'Bitter Gourd',
        price: 695,
        description: 'You can eat it',
        discount: 12,
        category: 'Snacks',
        image: bittergourd,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 503,
        name: 'Cabbage',
        price: 695,
        description: 'You can eat it',
        discount: 10,
        category: 'Snacks',
        image: cabbage,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 504,
        name: 'Cucumber',
        price: 695,
        description: 'You can eat it',
        discount: 22,
        category: 'Snacks',
        image: cucumber,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 505,
        name: 'Kale',
        price: 695,
        description: 'You can eat it',
        discount: 20,
        category: 'Snacks',
        image: kale,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 506,
        name: 'Lemon grass',
        price: 695,
        description: 'You can eat it',
        discount: 12,
        category: 'Snacks',
        image: lemongrass,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 507,
        name: 'Lettuce',
        price: 1295,
        description: 'You can eat it',
        discount: 12,
        category: 'Snacks',
        image: lettuce,
        rating: {
          rate: 4.6,
          count: 20,
        },
      },
      {
        id: 508,
        name: 'Marrow',
        price: 695,
        description: 'You can eat it',
        discount: 11,
        category: 'Snacks',
        image: marrow,
        rating: {
          rate: 4.1,
          count: 300,
        },
      },
      {
        id: 509,
        name: 'Onions',
        price: 6195,
        description: 'You can eat it',
        discount: 20,
        category: 'Snacks',
        image: onions,
        rating: {
          rate: 4.6,
          count: 200,
        },
      },
      {
        id: 510,
        name: 'Parley',
        price: 12695,
        description: 'You can eat it',
        discount: 10,
        category: 'Snacks',
        image: parley,
        rating: {
          rate: 2.6,
          count: 300,
        },
      },
    ],
  },
]
export default Categoriesdata
