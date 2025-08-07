import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const menClothing = await response.json();

    const response2 = await fetch(
      "https://fakestoreapi.com/products/category/women%27s%20clothing"
    );
    const womenClothing = await response2.json();

    const enhancedProducts = [...menClothing, ...womenClothing].map(
      (product) => ({
        ...product,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "White", "Gray", "Navy"],
        // inStock: Math.random() > 0.1,
        rating: {
          rate: product.rating.rate,
          count: product.rating.count,
        },
      })
    );

    return enhancedProducts;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    sortBy: "default",
    filterBy: {
      category: "all",
      priceRange: [0, 1000],
      inStock: false,
    },
  },
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.filteredItems = applyFiltersAndSort(
        state.items,
        state.filterBy,
        action.payload
      );
    },
    setFilterBy: (state, action) => {
      state.filterBy = { ...state.filterBy, ...action.payload };
      state.filteredItems = applyFiltersAndSort(
        state.items,
        state.filterBy,
        state.sortBy
      );
    },
    resetFilters: (state) => {
      state.sortBy = "default";
      state.filterBy = {
        category: "all",
        priceRange: [0, 1000],
        inStock: false,
      };
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const applyFiltersAndSort = (items, filters, sortBy) => {
  let filtered = [...items];

  // Apply filters
  if (filters.category !== "all") {
    filtered = filtered.filter((item) => item.category === filters.category);
  }

  filtered = filtered.filter(
    (item) =>
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1]
  );

  // Apply sorting
  switch (sortBy) {
    case "price-low-high":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high-low":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
    case "name":
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }

  return filtered;
};

export const { setSortBy, setFilterBy, resetFilters } = productsSlice.actions;
export default productsSlice.reducer;
