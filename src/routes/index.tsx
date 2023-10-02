import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import SearchRecipes from '../pages/SearchRecipes'
import RecipesByIngredient from '../pages/RecipesByIngredient'
import RecipesbyLetters from '../pages/RecipesbyLetters'

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchRecipes />} />
        <Route path="/ingredient" element={<RecipesByIngredient />} />
        <Route path="/letter" element={<RecipesbyLetters />} />
      </Routes>
    </BrowserRouter>
  )
}
