export const getPriceAttrsFromProduct = product => {
  const { adbug, defaultSkuPrice } = product;
  return { adbug, ...defaultSkuPrice };
};
