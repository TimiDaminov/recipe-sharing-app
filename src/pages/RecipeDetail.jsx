import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Make sure this points to your Firebase config

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const docRef = doc(db, 'recipes', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setRecipe(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching recipe: ', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #4793AF 0%, #FFC470 100%)' }}>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.photo} alt={recipe.dishName} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-[#DD5746]">{recipe.dishName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <p className="text-lg"><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
            <p className="text-lg"><strong>Budget:</strong> ${recipe.budgetMin} - ${recipe.budgetMax}</p>
            <p className="text-lg"><strong>Country of Origin:</strong> {recipe.countryOfOrigin}</p>
            <p className="text-lg"><strong>Cuisine:</strong> {recipe.cuisine}</p>
          </div>
          <p className=" leading-relaxed"><strong>Description:</strong> {recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
