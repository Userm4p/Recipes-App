import React from 'react'

export const MobileSeccion = () => {

    
    const reqicons = require.context("../../assets/icons", true);
    const icondata = [
       reqicons('./ic_main.svg'),
       reqicons('./ic_vegetarian.svg'),
       reqicons('./ic_cake.svg'),
       reqicons('./ic_fast-food.svg'),
       reqicons('./ic_kids.svg'),
       reqicons('./ic_soup.svg')
    ]
        

  return (

    <>  

        <div className="container__mobile-seccion">
            <div className="icon__container pointer">
                    <img src={icondata[1]} alt='icon'/>
                    <h1>Vegetarianos</h1>
            </div>
            <div className="icon__container pointer">
                    <img src={icondata[0]} alt='icon'/>
                    <h1>Principales</h1>
            </div>
            <div className="icon__container pointer">
                    <img src={icondata[2]} alt='icon'/>
                    <h1>Tortas</h1>
            </div>
            <div className="icon__container pointer">
                    <img src={icondata[3]} alt='icon'/>
                    <h1>Rapida</h1>
            </div>
            <div className="icon__container pointer">
                    <img src={icondata[4]} alt='icon'/>
                    <h1>Menu Niños</h1>
            </div>
            <div className="icon__container pointer">
                    <img src={icondata[5]} alt='icon'/>
                    <h1>Sopas</h1>
            </div>
        </div>
        
    </>
  )
}
