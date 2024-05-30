import React from "react";
import Welcome from "./pages/Welcome";
import Feed from "./pages/Feed";
import CreateRecipe from "./pages/CreateRecipe";
import RecipeDetail from "./pages/RecipeDetail"
import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/create_recipe" element={<CreateRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
