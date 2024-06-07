import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

const FavoritesPage = () => {
  const favorites = useAppStore(state => state.favorites)
  const hasFavorites = useMemo(() => favorites.length ,[favorites])


  return (
    <>
      <h1 className="text-6xl  font-extrabold">Favoritos</h1>
      {hasFavorites ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-10 gap-10">
            {favorites.map((drink) => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          </div>
        </div>
      ):(
        <p className="my-40 text-center text-2xl">Los favoritos se mostrarán aquí!</p>
      )}
    </>
  )
}

export default FavoritesPage