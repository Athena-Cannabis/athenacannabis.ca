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
    weight: 100,
    description: 'Eat all the things',
    image: {
      src: '/images/categories/edibles.jpg',
      alt: 'Cannabis infused edibles',
    },
  },

  // Cannabis - Flower
  {
    id: 29,
    weight: 900,
    image: {
      src: '/images/categories/dried-flower.jpg',
      alt: 'Cannabis dried flower',
    },
  },

  // Cannabis - Beverages
  {
    id: 31,
    weight: 100,
    image: {
      src: '/images/categories/beverages.jpg',
      alt: 'Cannabis infused beverage',
    },
  },

  // Cannabis - Pre-rolls
  {
    id: 28,
    weight: 800,
    image: {
      src: '/images/categories/pre-rolls.jpg',
      alt: 'Pre-rolled cannabis joint',
    },
  },

  // Cannabis - Capsules
  {
    id: 36,
    weight: 100,
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Capsules containing cannabis',
    },
  },

  // Cannabis - Extracts
  {
    id: 30,
    weight: 100,
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Extracts',
    },
  },

  // Cannabis - Oils
  {
    id: 35,
    weight: 100,
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Oils',
    },
  },

  // Cannabis - Vapes
  {
    id: 34,
    weight: 100,
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Vapes',
    },
  },

  // Cannabis - Seeds
  {
    id: 37,
    weight: 100,
    image: {
      src: '/images/categories/unknown.png',
      alt: 'Seeds',
    },
  },

  // Cannabis - Topicals
  {
    id: 33,
    weight: 100,
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
