import React, { useState } from 'react';
import { db, storage } from '../firebase'; // Import Firestore and Storage
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Storage functions

function CreateRecipe() {
  const [formData, setFormData] = useState({
    dishName: '',
    cookingTime: '',
    budgetMin: '',
    budgetMax: '',
    photo: null,
    isVegan: false,
    description: '',
    cuisine: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const fileRef = ref(storage, `photos/${formData.photo.name}`);
      await uploadBytes(fileRef, formData.photo);
      const photoURL = await getDownloadURL(fileRef);

      await addDoc(collection(db, 'recipes'), {
        ...formData,
        photo: photoURL // Replace the file object with the URL
      });

      console.log('Document successfully written!');
    } catch (e) {
      console.error('Error adding document: ', e);
      }
      setFormData({dishName: '',
      cookingTime: '',
      budgetMin: '',
      budgetMax: '',
      photo: null,
      isVegan: false,
      description: '',
      cuisine: '',})
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #4793AF 0%, #FFC470 100%)' }}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 border-t-4 border-[#4793AF]"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#4793AF]">Share Your Recipe!</h2>

        <div className="mb-6">
          <label className="block text-[#4793AF] text-lg font-semibold mb-2" htmlFor="dishName">
            Dish Name
          </label>
          <input
            id="dishName"
            name="dishName"
            type="text"
            value={formData.dishName}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Dish Name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-[#4793AF] text-lg font-semibold mb-2" htmlFor="cookingTime">
            Cooking Time (minutes)
          </label>
          <input
            id="cookingTime"
            name="cookingTime"
            type="number"
            value={formData.cookingTime}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Cooking Time"
            required
          />
        </div>

        <div className="mb-6 flex justify-between">
          <div className="w-1/2 pr-2">
            <label className="block text-[#4793AF] text-lg font-semibold mb-2" htmlFor="budgetMin">
              Budget min ($)
            </label>
            <input
              id="budgetMin"
              name="budgetMin"
              type="number"
              value={formData.budgetMin}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Minimum"
              required
            />
          </div>

          <div className="w-1/2 pl-2">
            <label className="block text-[#4793AF] text-lg font-semibold mb-2" htmlFor="budgetMax">
              Budget max ($)
            </label>
            <input
              id="budgetMax"
              name="budgetMax"
              type="number"
              value={formData.budgetMax}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Maximum"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[#4793AF] text-lg font-semibold mb-2" htmlFor="cuisine">
            Cuisine
          </label>
          <select
            id="cuisine"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>Select Cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Mexican">Mexican</option>
            <option value="Japanese">Japanese</option>
            <option value="French">French</option>
            <option value="Thai">Thai</option>
            <option value="Greek">Greek</option>
            <option value="Spanish">Spanish</option>
            <option value="American">American</option>
            <option value="Uzbek">Uzbek</option>
          </select>
        </div>

       

        <div className="mb-6">
          <label className="block text-[#4793AF] text-lg font-semibold mb-2" htmlFor="photo">
            Photo
          </label>
          <input
            id="photo"
            name="photo"
            type="file"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-6 flex items-center">
          <input
            id="isVegan"
            name="isVegan"
            type="checkbox"
            checked={formData.isVegan}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <label className="text-[#4793AF] text-lg font-semibold" htmlFor="isVegan">
            Vegan
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-[#4793AF] text-lg font-semibold mb-2" htmlFor="description">
            Recipe
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your recipe here"
            rows="5"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#4793AF] hover:bg-[#DD5746] text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add Recipe
          </button>
          <a
            href='/feed'
            className="bg-[#DD5746] hover:bg-[#4793AF] text-white py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back to Feed
          </a>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
