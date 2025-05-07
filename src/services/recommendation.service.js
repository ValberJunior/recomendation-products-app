// getRecommendations.js

const recommendationType = {
  singleProduct: 'SingleProduct',
  multipleProducts: 'MultipleProducts',
};

const returnMatchProducts = (
  products,
  selectedPreferences,
  selectedFeatures
) => {
  return products
    .map((product) => {
      const match =
        product.preferences.filter((p) => selectedPreferences.includes(p))
          .length +
        product.features.filter((f) => selectedFeatures.includes(f)).length;

      return { product, match };
    })
    .filter((matchProduct) => matchProduct.match > 0);
};

const returnLastMatchProduct = (matchProductList) => {
  let bestMatch = null;
  let maxScore = 0;

  for (const matchProduct of matchProductList) {
    if (matchProduct.match >= maxScore) {
      maxScore = matchProduct.match;
      bestMatch = matchProduct.product;
    }
  }

  return bestMatch ? [bestMatch] : [];
};

const returnMultipleMatchProductList = (matchProductList) => {
  return matchProductList.map((matchProduct) => matchProduct.product);
};

const getRecommendations = (formData, products) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } =
    formData;

  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */

  const matchProducts = returnMatchProducts(
    products,
    selectedPreferences,
    selectedFeatures
  );

  if (selectedRecommendationType === recommendationType.singleProduct) {
    return returnLastMatchProduct(matchProducts);
  } else if (selectedRecommendationType === recommendationType.multipleProducts)
    return returnMultipleMatchProductList(matchProducts);

  return [];
};

export default { getRecommendations };
