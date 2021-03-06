import React from 'react'

export const Restaurant = ({restaurant}) => {
  return (
    <div key={restaurant.id} className="card">
    <img width="254" height="160px" src={restaurant.image} />
    <div className="restaurant-details">
        <div className="restaurant-title">{restaurant.name}</div>
        <div className="restaurant-subtitle">
          {restaurant.category.join(", ")}
         </div>
    </div>
    <div className="restaurant-info">
        <div className="restaurant-ratings">
            <i className="material-icons star-icon">star</i> {restaurant.rating}
        </div>
         .<div className="restaurant-delivery-timings"> {restaurant.deliveryTiming}</div> .
        <div className="restaurant-cost-for-two">₹{restaurant.costForTwo} FOR TWO</div>
    </div>
    <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text"> {restaurant.offers.join(" | ")}</span>
    </div>
</div>
  )
}

