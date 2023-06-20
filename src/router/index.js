import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CuisinesView from '../views/CuisinesView.vue'
import MyRecipesView from '../views/MyRecipesView.vue'
import CuisineSearchView from '../views/CuisineSearchView.vue'
import RecipeSearchView from '../views/RecipeSearchView.vue'
import RecipeDetailsView from '../views/RecipeDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cuisines',
    name: "cuisines",
    component: CuisinesView
  },
  {
    path: '/myRecipes',
    name: 'myrecipes',
    component: MyRecipesView
  },
  {
    path: '/cuisine/:countryName',
    name: "cuisinesearch",
    component: CuisineSearchView
  },
  {
    path: '/searched/:searchQuery',
    name: "searched",
    component: RecipeSearchView
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeDetailsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(){
    return {top: 0}
  }
})

export default router
