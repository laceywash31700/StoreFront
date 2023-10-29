# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# StoreFront
# LAB - 36

## Deployment Test

### Author: Lacey Washington

- [tests report]()
- [front-end]()

### Setup

#### `.env` requirements

- `PORT` - 5173

#### Running the app

- `npm run dev`
- Endpoint:

  - Returns array of Objects

    ```javascript
    [
    {
        "id": 14,
        "title": "Non-Alcoholic Concentrated Perfume Oil",
        "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        "price": 120,
        "discountPercentage": 15.6,
        "rating": 4.21,
        "stock": 114,
        "brand": "Al Munakh",
        "category": "fragrances",
        "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/14/1.jpg",
          "https://i.dummyjson.com/data/products/14/2.jpg",
          "https://i.dummyjson.com/data/products/14/3.jpg",
          "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
        ]
      }
    ];
    ```

#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

#### UML

(Created with [figjam](https://www.figma.com/jam))

![UML Diagram](./src/assets/StoreFront%20WireFrame.jpg)