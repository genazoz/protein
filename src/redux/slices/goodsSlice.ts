import {createSlice} from '@reduxjs/toolkit'
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";

type FetchGoodsArgs = {
  url: string;
  queryCategories: string;
  querySearch: string;
  goodsPerPage: number;
  currentPage: number;
}

export type Goods = {
  id: string;
  prodId: string;
  imageUrl: string;
  title: string;
  price: number;
  count: number;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface GoodsSliceState {
  items: Goods[];
  status: Status;
}

export const fetchGoods = createAsyncThunk<Goods[], FetchGoodsArgs>('goods/fetchGoodsStatus', async (args) => {
  const {queryCategories, querySearch, url, goodsPerPage, currentPage} = args;

  var {data} = await axios.get<Goods[]>(`${url}products?p=${currentPage}&l=${goodsPerPage}${queryCategories}${querySearch}`);

  return data;
})

const initialState: GoodsSliceState = {
  items: [],
  status: Status.LOADING // loading | success | error
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state) => {
      state.status = Status.LOADING;
    })
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    })
    builder.addCase(fetchGoods.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    })
  },
})

export const goodsSelector = (state: RootState) => state.goods;

export const {setItems} = goodsSlice.actions

export default goodsSlice.reducer