import React from 'react';
import noThumbnail from 'assets/img/no-thumbnail.jpg';
import 'components/restaurants/Restaurants.scss';
function Restaurant({ restaurant }) {
  return (
    <div className='grid restaurant-card'>
      <div className='grid_item grid_item-sm-span-3'>
        <div className='restaurant-card-thumb'>
          <img
            src={restaurant.thumb ? restaurant.thumb : noThumbnail}
            className=''
            alt={`Thumbnnail for ${restaurant.name}`}
          />
        </div>
      </div>
      <div className='grid_item grid_item-sm-span-9'>
        <div class='restaurant-card-info'>
          <div className='restaurant-card-header'>
            <div className='grid'>
              <div className='grid_item-sm-span-10'>
                <h3 class="main-font-4">{restaurant.name}</h3>
              </div>
              <div className='grid_item-sm-span-2'>
                <div class='card-ratings'>
                  <i class='fas fa-star'></i>
                  <span>{restaurant.user_rating.aggregate_rating}</span>{' '}
                </div>
                <div class='card-reviews'>
                  {restaurant.all_reviews_count} reviews
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className='restaurant-card-body'>
            <p>{restaurant.cuisines}</p>
            <address className='card-text'>
              {restaurant.location.address}
            </address>
          </div>

          <div class='restaurant-card-footer'>
            {restaurant.highlights.slice(0, 5).map((highlight) => (
              <span class='badge'>{highlight}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
