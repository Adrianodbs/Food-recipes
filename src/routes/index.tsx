import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import SearchRecipes from '../pages/SearchRecipes'
import RecipesByIngredient from '../pages/RecipesByIngredient'
import RecipesbyLetters from '../pages/RecipesbyLetters'
import Details from '../pages/Details'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function RouteApp() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchRecipes />} />
        <Route path="/ingredient" element={<RecipesByIngredient />} />
        <Route path="/letter" element={<RecipesbyLetters />} />
        <Route path="/detalhes/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
