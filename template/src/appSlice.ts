import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateEntity } from './App';
import { RootState } from './app/store';
import { Locale } from './locales';
import { ThemeValue } from './themes';

export interface AppState {
  entity: AppStateEntity;
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  error: null;
}

const initialState = {
  entity: {} as AppStateEntity,
  status: 'idle',
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initAppState(state, action: PayloadAction<AppStateEntity>) {
      state.entity = action.payload;
      state.status = 'succeeded';
    },

    setAppTheme(state, action: PayloadAction<ThemeValue>) {
      state.entity.theme = action.payload;
    },

    setAppLocale(state, action: PayloadAction<Locale>) {
      state.entity.locale = action.payload;
    },
  },
  extraReducers: {},
});

export const { initAppState, setAppTheme, setAppLocale } = appSlice.actions;
export const selectApp = (state: RootState) => state.app.entity;

export default appSlice.reducer;
