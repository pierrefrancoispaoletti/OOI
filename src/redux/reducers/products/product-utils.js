export const updateProductInCategory = (category, product) => {
  const { title, ...otherProps } = product;

  let prevObjectValues = Object.values(category[product.category]);

  let index = prevObjectValues.findIndex((obj) => obj._id === product._id);

  let prevObjectKeys = prevObjectValues[index];

  let newCategoryObject = { ...category };

  delete newCategoryObject[product.category][prevObjectKeys.title];

  newCategoryObject[product.category][title] = { ...otherProps };

  return newCategoryObject;
};
