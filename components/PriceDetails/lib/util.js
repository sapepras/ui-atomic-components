export const getPriceAttrsFromProduct = product => {
  const { adBug, defaultSkuPrice } = product;
  return { adBug, ...defaultSkuPrice };
};
