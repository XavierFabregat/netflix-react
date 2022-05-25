import { useEffect, useState  } from "react";
import './userRating.css'

const UserRating = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(rating) {
    setRating(rating);
    postRating(id, rating)
  }
  
  useEffect(() => {
    getRating(id);
  }, []); //eslint-disable-line

  async function getRating(id) {
    const result = await fetch(`http://localhost:5050/rating/${id}`);
    const rating = await result.json();
    if (rating && rating.length) {
      setRating(rating[0].rating);
    }
  }

  async function postRating(id, rating) {
    const formerRating = await fetch(`http://localhost:5050/rating/${id}`);
    const formerRatingJson = await formerRating.json();

    if (formerRatingJson && !formerRatingJson.length) {
      let body = {movie_id: id, rating: rating }
      fetch('http://localhost:5050/rating',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    } else {
        let body = {movie_id: id, rating: rating }
        fetch('http://localhost:5050/rating',{
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    }

  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return ( 
           <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="userStar">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default UserRating;