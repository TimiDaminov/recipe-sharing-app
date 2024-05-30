import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Import your Firebase Firestore instance
import RecipeItem from '../components/RecipeItem';
import Navbar from '../components/Navbar';

const Feed = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesCollection = await getDocs(collection(db, 'recipes'));
        const recipesData = recipesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecipes(recipesData);
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className='gradient-bg min-h-screen'>
      <Navbar />
      <form className="max-w-md mx-auto mb-10 mt-10">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by title or author" required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#FFC470] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find</button>
        </div>
      </form>
      <h1 className='text-3xl text-white flex justify-center'>Hey, let’s try something new today :)</h1>
      <div className='grid grid-cols-4 gap-4 mt-10 p-4'>
        {recipes.map(recipe => (
          <RecipeItem
            key={recipe.id}
            id={recipe.id} // Pass the id
            image={recipe.photo} // Assuming 'photo' is the field containing the image URL
            title={recipe.dishName}
            time={recipe.cookingTime}
            origin={recipe.cuisine}
            minPrice={recipe.budgetMin}
            maxPrice={recipe.budgetMax}
            isVegan={recipe.isVegan}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
