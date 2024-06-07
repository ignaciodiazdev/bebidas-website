import { StateCreator } from 'zustand'
import type { Recipe } from '../types'

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorito => favorito.idDrink !== recipe.idDrink)
            }))
        }else{
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorite = localStorage.getItem('favorites')
        if(storedFavorite){
            set({
                favorites: JSON.parse(storedFavorite)
            })
        }
    }
})