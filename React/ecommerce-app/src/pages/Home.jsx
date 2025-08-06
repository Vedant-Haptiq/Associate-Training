import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/slices/ProductSlice";
import ProductCard from "../components/products/productCard";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-yellow-950  py-16 text-center">
        <h1 className="text-4xl font-bold text-white text-gray-800 mb-4">
          Upgrade Your Wardrobe
        </h1>
        <p className="text-gray-600 mb-6 text-white">
          we are offering a numerous amount of products.
        </p>
        <Link
          to="/products"
          className="bg-white text-yellow-950 px-6 py-2 rounded hover:bg-yellow-100"
        >
          Shop Now
        </Link>
      </section>

      {/* Discount Banner */}
      <div className="bg-yellow-100 text-yellow-900 text-center py-3 text-sm">
        Get 20% off on your first order. Use code{" "}
        <span className="font-bold">WELCOME20</span>
      </div>

      {/* Features */}

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Our Products
          </h2>

          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="large" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  to="/products"
                  className="text-sm text-black underline hover:text-gray-700"
                >
                  View All Products
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 🔥 Special Discount Banner */}
      <section className="bg-yellow-100 border-t border-b border-yellow-300 py-6 text-center">
        <h3 className="text-xl font-semibold text-yellow-800">
          Special Offer: Get 25% OFF on your first purchase! Use code:{" "}
          <span className="font-bold">WELCOME25</span>
        </h3>
        <p className="mt-2">
          Limited time only.{" "}
          <Link to="/products" className="underline text-yellow-700">
            Shop Now
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Home;
