import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";

interface SettingsSliceState {
  url: string,
  goodsPerPage: number,
  menuOpened: boolean,
  showPreloader: boolean,
  previewSubmitHovered: boolean,
  showCart: boolean
}

const initialState: SettingsSliceState = {
  url: `https://62ad406c402135c7acbe4f1c.mockapi.io/`,
  goodsPerPage: 24,
  menuOpened: false,
  showPreloader: true,
  previewSubmitHovered: false,
  showCart: false
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMenuOpened(state, action: PayloadAction<boolean>) {
      state.menuOpened = action.payload;
    },
    setShowPreloader(state, action: PayloadAction<boolean>) {
      state.showPreloader = action.payload;
    },
    setPreviewSubmitHovered(state, action: PayloadAction<boolean>) {
      state.previewSubmitHovered = action.payload;
    },
    setShowCart(state, action: PayloadAction<boolean>) {
      state.showCart = action.payload;
    },
  },
})

export const settingsSelector = (state: RootState) => state.settings;

export const {setMenuOpened, setShowPreloader, setPreviewSubmitHovered, setShowCart} = settingsSlice.actions

export default settingsSlice.reducer