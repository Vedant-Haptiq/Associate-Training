import React from "react";

const LoadingSpinner = ({ size = "medium" }) => {
  const dotSize = {
    small: "w-2 h-2",
    medium: "w-3 h-3",
    large: "w-4 h-4",
  };

  const dotSpacing = {
    small: "gap-1",
    medium: "gap-2",
    large: "gap-3",
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`flex ${dotSpacing[size]} items-end`}>
        <span
          className={`${dotSize[size]} bg-yellow-950 rounded-full animate-[bounce_0.6s_ease-in-out_infinite]`}
          style={{ animationDelay: "0s" }}
        ></span>
        <span
          className={`${dotSize[size]} bg-yellow-950 rounded-full animate-[bounce_0.6s_ease-in-out_infinite]`}
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className={`${dotSize[size]} bg-yellow-950 rounded-full animate-[bounce_0.6s_ease-in-out_infinite]`}
          style={{ animationDelay: "0.3s" }}
        ></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
