import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(  //We are making this for the collection preview which stills thinks that it is dealong with an array
  [selectCollections],
  (collections) => Object.keys(collections).map( key => collections[key] )  //we convert the object to array and return its content 1 by 1 through mapS
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections], 
  (collections) => collections[collectionUrlParam]  // Check shop.data. We have changed the array to object of hats, jackets etc
);

    //We didn't do this:- as .find method would check the whole array until it get the element which is bad for optimiztion purpose
    // const COLLECTION_ID_MAP = {   
    //   hats: 1,
    //   sneakers: 2,
    //   jackets: 3,
    //   womens: 4,
    //   mens: 5,
    // };
    // export const selectCollection = (collectionUrlParam) => createSelector(
    //     [selectCollections], 
    //     (collections) =>
    //     collections.find(
    //       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    //         )
    //   );