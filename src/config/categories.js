// Categories configuration values
// We're using the category information that comes from
// the datasource but we use this configuration to
// overide any specific values
//
// IDs come from the data source

const categories = [

  // Accessories
  {
    id: 17,
    weight: 0,
    description: '',
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Accessories',
    },
  },

  // Accessories - Rolling Papers
  {
    id: 26,
    weight: 100,
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Rolling papers',
    },
  },

  // Cannabis - Edibles
  {
    id: 32,
    weight: 300,
    description: 'Eat all the things',
    icon: {
      viewbox: '0 0 100 100',
      contents: `<g><path d="M59.263,44.416c1.292,0.647,2.726,0.993,4.167,0.993c3.312,0,6.397-1.78,8.057-4.647c1.236-2.147,1.566-4.65,0.929-7.048   c-0.598-2.227-1.971-4.104-3.884-5.354c4.084-2.678,5.427-8.122,2.955-12.403c-1.655-2.866-4.742-4.646-8.057-4.646   c-1.441,0-2.875,0.344-4.167,0.996C58.985,7.434,54.945,3.553,50,3.553s-8.982,3.881-9.264,8.753   c-1.293-0.652-2.726-0.996-4.167-0.996c-3.313,0-6.398,1.781-8.057,4.646c-1.237,2.148-1.566,4.652-0.93,7.05   c0.597,2.226,1.972,4.104,3.885,5.354c-4.085,2.679-5.428,8.121-2.955,12.401c1.654,2.867,4.739,4.647,8.057,4.647   c1.441,0,2.874-0.344,4.168-0.993c0.252,4.354,3.511,7.909,7.729,8.615v43.416h3.066V53.031   C55.752,52.325,59.01,48.771,59.263,44.416z M69.452,34.507c0.43,1.604,0.21,3.283-0.622,4.724   c-1.11,1.923-3.178,3.113-5.399,3.113c-1.084,0-2.155-0.288-3.104-0.834c-1.005-0.578-1.804-1.412-2.344-2.404   c2.893-2.152,4.885-5.444,5.314-9.203c0.042-0.001,0.08-0.011,0.121-0.011c0.009,0,0.015,0.002,0.022,0.002   c0.01,0,0.019-0.002,0.021-0.002c1.077,0.004,2.146,0.291,3.083,0.834C67.991,31.557,69.019,32.9,69.452,34.507z M60.325,15.209   c0.947-0.546,2.021-0.835,3.104-0.835c2.226,0,4.289,1.192,5.399,3.113c1.717,2.975,0.693,6.787-2.278,8.504   c-0.938,0.544-2.006,0.831-3.083,0.835c-0.007,0-0.016-0.002-0.021-0.002c-0.005,0-0.018,0.002-0.022,0.002   c-0.041,0-0.079-0.01-0.121-0.01c-0.434-3.76-2.426-7.052-5.314-9.206C58.521,16.619,59.32,15.789,60.325,15.209z M50,6.614   c3.432,0,6.226,2.795,6.226,6.227c0,1.185-0.339,2.286-0.909,3.227c-1.634-0.707-3.43-1.103-5.312-1.103s-3.682,0.396-5.312,1.103   c-0.577-0.939-0.916-2.042-0.916-3.227C43.772,9.409,46.566,6.614,50,6.614z M30.548,22.214c-0.43-1.607-0.21-3.286,0.621-4.727   c1.11-1.921,3.18-3.113,5.4-3.113c1.085,0,2.155,0.289,3.104,0.835c1.025,0.592,1.812,1.436,2.337,2.405   c-2.889,2.154-4.881,5.443-5.312,9.202c-0.039,0.002-0.078,0.01-0.116,0.01c-0.011,0-0.019-0.002-0.027-0.002   c-0.008,0-0.019,0.002-0.023,0.002c-1.075-0.004-2.144-0.291-3.079-0.835C32.009,25.161,30.979,23.818,30.548,22.214z    M39.675,41.51c-0.942,0.546-2.021,0.835-3.104,0.835c-2.225,0-4.29-1.191-5.4-3.114c-1.716-2.972-0.693-6.789,2.279-8.505   c0.938-0.542,2.004-0.83,3.079-0.832c0.009,0,0.019,0,0.023,0c0.012,0,0.021,0,0.027,0c0.038,0,0.077,0.008,0.116,0.009   c0.433,3.759,2.428,7.051,5.315,9.203C41.476,40.098,40.677,40.932,39.675,41.51z M39.671,28.358   c0-5.693,4.633-10.328,10.329-10.328c5.694,0,10.326,4.635,10.326,10.328c0,5.695-4.632,10.328-10.326,10.328   C44.303,38.688,39.671,34.055,39.671,28.358z M50,50.103c-3.434,0-6.227-2.793-6.228-6.227c0-1.183,0.339-2.282,0.916-3.226   c1.63,0.706,3.425,1.102,5.312,1.102c1.89,0,3.688-0.396,5.317-1.104c0.588,0.963,0.904,2.07,0.904,3.229   C56.225,47.31,53.433,50.103,50,50.103z"></path><path d="M72.398,59.209c-1.118-0.276-2.288-0.426-3.492-0.426c-8.039,0-14.56,6.519-14.56,14.556c0,1.204,0.148,2.374,0.429,3.492   c1.115,0.273,2.284,0.425,3.487,0.425c8.04,0,14.561-6.519,14.561-14.556C72.823,61.497,72.675,60.326,72.398,59.209z"></path><path d="M31.094,58.68c-1.204,0-2.374,0.147-3.492,0.425c-0.272,1.121-0.425,2.288-0.425,3.492c0,8.04,6.521,14.556,14.559,14.556   c1.206,0,2.373-0.148,3.488-0.425c0.275-1.118,0.429-2.286,0.429-3.49C45.648,65.196,39.132,58.68,31.094,58.68z"></path></g>`,
    },
    image: {
      src: '/images/categories/edibles.jpg',
      alt: 'Cannabis infused edibles',
    },
  },

  // Cannabis - Flower
  {
    id: 29,
    weight: 900,
    description: 'Flower power',
    image: {
      src: '/images/categories/dried-flower.jpg',
      alt: 'Cannabis dried flower',
    },
  },

  // Cannabis - Beverages
  {
    id: 31,
    weight: 300,
    description: 'Drinks drinks drinks',
    image: {
      src: '/images/categories/beverages.jpg',
      alt: 'Cannabis infused beverage',
    },
  },

  // Cannabis - Pre-rolls
  {
    id: 28,
    weight: 800,
    description: 'Pre flower power',
    image: {
      src: '/images/categories/pre-rolls.jpg',
      alt: 'Pre-rolled cannabis joint',
    },
  },

  // Cannabis - Capsules
  {
    id: 36,
    weight: 200,
    description: 'Capsules on capsules',
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Capsules containing cannabis',
    },
  },

  // Cannabis - Extracts
  {
    id: 30,
    weight: 200,
    description: 'Extracts on extracts',
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Extracts',
    },
  },

  // Cannabis - Oils
  {
    id: 35,
    weight: 200,
    description: 'Oils and oils',
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Oils',
    },
  },

  // Cannabis - Vapes
  {
    id: 34,
    weight: 100,
    description: 'Vapes on vapes',
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Vapes',
    },
  },

  // Cannabis - Seeds
  {
    id: 37,
    weight: 200,
    description: 'Plant things',
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Seeds',
    },
  },

  // Cannabis - Topicals
  {
    id: 33,
    weight: 200,
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Topicals',
    },
  },

]

export {
  categories,
}


/**

  {
      "id": 27,
      "name": "Accessory",
      "slug": "accessory",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 6,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/27"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  },

  {
      "id": 20,
      "name": "Bongs, Pipes and Rigs",
      "slug": "bongs-pipes-and-rigs",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/20"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  },

  {
      "id": 18,
      "name": "Cleaning and Storage",
      "slug": "cleaning-and-storage",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/18"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  },


  {
      "id": 22,
      "name": "Grinders",
      "slug": "grinders",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/22"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  },
  {
      "id": 19,
      "name": "Infusers",
      "slug": "infusers",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/19"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  },

  {
      "id": 21,
      "name": "Rolling Papers, Cones and Filters",
      "slug": "rolling-papers-cones-and-filters",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 4,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/21"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  },
  {
      "id": 24,
      "name": "Rolling Trays",
      "slug": "rolling-trays",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/24"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  },

  {
      "id": 25,
      "name": "Tools, Scales and Kits",
      "slug": "tools-scales-and-kits",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/25"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  },
  {
      "id": 33,
      "name": "Topicals",
      "slug": "topicals",
      "parent": 16,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 11,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/33"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/16"
              }
          ]
      }
  },
  {
      "id": 15,
      "name": "Uncategorized",
      "slug": "uncategorized",
      "parent": 0,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/15"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ]
      }
  },

  {
      "id": 23,
      "name": "Vaporizers",
      "slug": "vaporizers",
      "parent": 17,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 2,
      "_links": {
          "self": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/23"
              }
          ],
          "collection": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories"
              }
          ],
          "up": [
              {
                  "href": "https://api.athenacannabis.ca/wp-json/wc/v3/products/categories/17"
              }
          ]
      }
  }
]
*/
