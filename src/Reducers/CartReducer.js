import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // 1. Check product that we send in action.payload exist in the array cartItems
      // 2.we just want to update quantity we need to check if that item exist
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          //   3.If current product is same as existing product then
          //  return updated item else return old item
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          //    if action.payload product does not exist
          // then return original state and the cartItems
          // spread the original cartitems and add the new item
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
