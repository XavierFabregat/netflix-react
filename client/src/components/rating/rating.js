import { useEffect, useState } from "react";
import filledStar from '../../assets/filled-star.png';
import blankStar from '../../assets/blank-star.png';
import './rating.css'
function Rating ({ rating }) {

  const [starArray, setStarArray] = useState([]);

  useEffect(() => {
    generateRating(rating);
  }, []); //eslint-disable-line

  function generateRating (rating) {
    rating = Math.round(rating);
    let ratingArray = [];
    let counter = 5;
    while (counter) {
      if (rating >= 2) ratingArray.push(1);
      else if (rating < 2) ratingArray.push(0);
      rating -= 2;
      counter--;
    }
    setStarArray(ratingArray);
  };

  return (
    <div className="rating">
      {starArray.length && 
        starArray.map((el) => {
          return (
            <div className="star">
              {el === 1 ? <img src={filledStar} alt="filled-star"/> : <img src={blankStar} alt="blank-star"/>}
            </div>
          )
        })
      }
    </div>
  )
}


export default Rating;