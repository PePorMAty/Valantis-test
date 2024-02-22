import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../../api/api";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const res = productApi.getProducts();
  return res;
});

const initialState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default productSlice.reducer;
