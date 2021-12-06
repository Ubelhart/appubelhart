const products = [
  {
    id: 1,
    title: "Sweater Hombre Farenheite Arthur New",
    price: 2990,
    pictureUrl: "./img/productOne.webp",
    description:
      "Sweater de hombre, de algodón, cuello redondo, otoño/invierno 2020.",
    stock: 13,
  },
  {
    id: 2,
    title: "Campera Topper Br Puffer Hombre Negro",
    price: 6239,
    pictureUrl: "./img/productTwo.webp",
    stock: 12,
  },
  {
    id: 3,
    title: "Chinela Cuero Hombre Briganti Zapato Franciscana - Hcch00917",
    price: 10348,
    pictureUrl: "./img/productThree.webp",
    stock: 5,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products[0]);
    }, 3000);
  });
};
