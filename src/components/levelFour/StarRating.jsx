export const StarRatingOptimzed = () => {
  const starbtnClicked = (num) => {
    let stars = document.querySelectorAll(".star-rating");
    stars.forEach((star, i) => {
      if (i < num) {
        star.classList.add("star-selected");
      } else {
        star.classList.remove("star-selected");
      }
    });
  };

  const handleStarClick = (event) => {
    console.log("event.currentTarget.children", event.currentTarget.children);
    console.log("event.target", event.target);

    const starIndex =
      Array.from(event.currentTarget.children).indexOf(event.target) + 1;
    starbtnClicked(starIndex);
  };

  return (
    <div className="stars" onClick={handleStarClick}>
      <div className="star-rating"></div>
      <div className="star-rating"></div>
      <div className="star-rating"></div>
      <div className="star-rating"></div>
      <div className="star-rating"></div>
    </div>
  );
};

const StarRating = () => {
  const starbtnClicked = (num) => {
    let stars = document.querySelectorAll(".star-rating");
    stars.forEach((star, i) => {
      if (i < num) {
        star.classList.add("star-selected");
      } else {
        star.classList.remove("star-selected");
      }
    });
  };
  return (
    <div className="stars">
      <div className="star-rating" onClick={() => starbtnClicked(1)}></div>
      <div className="star-rating" onClick={() => starbtnClicked(2)}></div>
      <div className="star-rating" onClick={() => starbtnClicked(3)}></div>
      <div className="star-rating" onClick={() => starbtnClicked(4)}></div>
      <div className="star-rating" onClick={() => starbtnClicked(5)}></div>
    </div>
  );
};

export default StarRating;
