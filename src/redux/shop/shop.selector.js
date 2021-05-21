import { createSelector } from 'reselect';

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShopData = (state) => state.shop;
export const selectShop = createSelector(
  [selectShopData],
  (shop) => shop.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectShop],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShop],
    (collections) => collections[collectionUrlParam]
  );
