import React from 'react';
import { Link } from 'react-router-dom';
const RecipeItem = ({ id,image, title, time, origin, minPrice, maxPrice, difficulty,isVegan }) => {
  return (
    <Link className="max-w-xs md:max-w-sm lg:max-w-md mx-auto flex flex-row" to={`/recipe/${id}`}>
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full h-48 rounded-t-lg md:h-64" src={image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-[#4793AF] dark:text-white">{title}</h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-[#4793AF] dark:text-white">⏰ {time} min</h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-[#4793AF] dark:text-white">🌍 {origin}</h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-[#4793AF] dark:text-white">{minPrice} - {maxPrice}$</h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-[#4DDF41] dark:text-white">{difficulty}</h5>    
        </div>
        <h6 className="text-xl font-bold tracking-tight text-[#4DDF41] dark:text-white"> {isVegan ? "Vegan" : ""}</h6>
      </a>
    </Link>
  );
};

export default RecipeItem;
