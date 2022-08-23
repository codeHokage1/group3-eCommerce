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
                category: "bakery",
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
  }
    
]
export default Categoriesdata;


