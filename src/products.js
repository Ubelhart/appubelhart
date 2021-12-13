class Product {
  constructor(id, title, price, pictureUrl, category, description, stock) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.pictureUrl = pictureUrl;
    this.category = category;
    this.description = description;
    this.stock = stock;
  }
}

const products = [];

products.push(
  new Product(
    1,
    "Sweater Hombre Farenheite Arthur New",
    2990,
    "./img/productOne.webp",
    "Sweaters",
    "Sweater Lanilla. Entallado. Liviano. Farenheite.",
    13
  )
);

products.push(
  new Product(
    2,
    "Campera Topper Br Puffer Hombre Negro",
    6239,
    "./img/productTwo.webp",
    "Camperas",
    "Campera puffer corta, a la primera cadera, hombro caido. Matelaseado ancho horizontal en frente y espalda.",
    12
  )
);

products.push(
  new Product(
    3,
    "Chinela Cuero Hombre Briganti Zapato Franciscana - Hcch00917",
    10348,
    "./img/productThree.webp",
    "Calzados",
    "Chinela de Hombre de Cuero - Briganti Taco: 1 cm. Material Interno: Cuero Material Externo: Cuero Base: Goma",
    5
  )
);

products.push(
  new Product(
    4,
    "Footjoy Sweater Termico De Golf Merino - 3 N Golf",
    23912,
    "./img/productFour.webp",
    "Sweaters",
    "Diseñado para ponerse y quitarse fácilmente a medida que cambian las condiciones en el campo.",
    7
  )
);

products.push(
  new Product(
    5,
    "Campera Deportiva Rompeviento Gdo Tornado Impermeable Ropa",
    2158,
    "./img/productFive.webp",
    "Camperas",
    "Repele el agua. Tela: Silver. 100% Poliester. Con capucha, no se desmonta.Tiene su respectivo cierre en el medio. ",
    3
  )
);

products.push(
  new Product(
    6,
    "Tas Zapatillas Skate Alpina Directo De Fábrica",
    1880,
    "./img/productSix.webp",
    "Calzados",
    "Confeccionadas en tela doble frontura y gamuzon sintetico. Detalles de diseños con logos de la marca.",
    9
  )
);

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter((item) => category === item.category));
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((item) => parseInt(id) === item.id));
    }, 1000);
  });
};
