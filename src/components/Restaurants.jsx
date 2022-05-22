import React from 'react'
import { Restaurant } from './Restaurant'

export const Restaurants = (props) => {
  return  (
  <div className="container divider">
  <div className="cards">
    {props.restaurants.map((restaurant)=>(
     <Restaurant key={restaurant.id} restaurant={restaurant}/>
    ))}
      
      
  </div>
</div>
  ) 
  
}
