const products = [
  {
    id: 1,
    title: "Sweater Hombre Farenheite Arthur New",
    price: 2990,
    pictureUrl: "../public/img/productOne",
    stock: 13,
  },
  {
    id: 2,
    title: "Campera Topper Br Puffer Hombre Negro",
    price: 6239,
    pictureUrl: "../public/img/productTwo",
    stock: 12,
  },
  {
    id: 3,
    title: "Chinela Cuero Hombre Briganti Zapato Franciscana - Hcch00917",
    price: 10348,
    pictureUrl: "../public/img/productThree",
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
