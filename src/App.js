import React from 'react'
import { MainPage } from './components/MainPage/MainPage'
import { MobileSeccion } from './components/MobileSeccions/MobileSeccion'
import { NewRecipeGrid } from './components/NewRecipes/NewRecipeGrid'
import { Footer } from './components/UI/Footer'
import { Navbar } from './components/UI/Navbar'
import { DatosContext } from './DataContext'
import { useFetchRecipes } from './Hooks/useFetchRecipes'



export const App = () => {

  const { data} = useFetchRecipes();

  return (
    <>
      <DatosContext.Provider value={data}>
        <Navbar/>
        <MainPage/>
        <MobileSeccion/>
        <NewRecipeGrid/>
      </DatosContext.Provider>
      <Footer/>
    </>
  )
}
