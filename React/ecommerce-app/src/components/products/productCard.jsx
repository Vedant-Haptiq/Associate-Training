import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { addToCart } from "../../store/slices/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlistSlice";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ product, size: "M", quantity: 1 }));
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="card group overflow-hidden animate-fade-in">
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-64 object-cover "
          />

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-white text-gray-800 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`p-3 rounded-full transition-colors duration-200 transform hover:scale-110 ${
                isInWishlist
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isInWishlist ? "fill-current" : ""}`}
              />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 capitalize">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              {/* {renderStars(product.rating.rate)} */}
              <span className="text-sm text-gray-500 ml-1">
                ({product.rating.count})
              </span>
            </div>
          </div>

          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-600">
                ${product.price}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {product.sizes &&
                product.sizes.slice(0, 3).map((size) => (
                  <span
                    key={size}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {size}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
