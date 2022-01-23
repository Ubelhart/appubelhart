class Category {
  constructor(idCategory, name) {
    this.idCategory = idCategory;
    this.name = name;
  }
}

const categoriesMock = [];

categoriesMock.push(new Category(1, "Sweaters"));
categoriesMock.push(new Category(2, "Calzados"));
categoriesMock.push(new Category(3, "Camperas"));

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categoriesMock);
    }, 1000);
  });
};

export const getCategoryById = (id) => {
  const parseId = parseInt(id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categoriesMock.find((item) => parseId === item.idCategory));
    }, 100);
  });
};
