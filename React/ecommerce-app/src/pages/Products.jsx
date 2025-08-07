import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/ProductSlice";
import ProductCard from "../components/products/productCard";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Products = () => {
  const dispatch = useDispatch();
  const {
    filteredItems: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => dispatch(fetchProducts())}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600">
            Discover our complete collection of premium clothing
          </p>
        </div>

        {/* Filters */}
        {/* <ProductFilters /> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Found */}
        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more products
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
