import {createSlice, current, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {Goods} from "./goodsSlice";
import {getCartFromLS} from "../../utils/getCartFromLS";

interface CartSliceState {
  items: Goods[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartSliceState = getCartFromLS()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{goods: Goods, count?: number}>) {
      if(!action.payload.count)
        action.payload.count = 1;

      const findItem = state.items.find(item => item.prodId === action.payload.goods.prodId);

      if (findItem) {
        if(findItem.count < 150)
          findItem.count = findItem.count + action.payload.count;
      } else {
        state.items.push({...action.payload.goods, count: action.payload.count});
      }
      console.log(current(state))

      cartSlice.caseReducers.updateData(state);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(item => item.prodId === action.payload);

      if (findItem && findItem.count > 1) {
        findItem.count--;
      }

      cartSlice.caseReducers.updateData(state);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj.prodId !== action.payload);

      cartSlice.caseReducers.updateData(state);
    },
    clearItems(state) {
      state.items = [];

      cartSlice.caseReducers.updateData(state);
    },
    updateData(state) {
      state.totalCount = state.items.reduce((acc, cur) => cur.count + acc, 0)
      state.totalPrice = state.items.reduce((acc, cur) => cur.price * cur.count + acc, 0)
    }
  }
})

export const cartSelector = (state: RootState) => state.cart;

export const {addItem, removeItem, clearItems, minusItem} = cartSlice.actions

export default cartSlice.reducer