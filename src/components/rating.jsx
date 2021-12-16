import RatingBox from "../style/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rate }) => {
  const decimalRate = rate;

  const percentRating = (decimalRate / 5) * 100;
  const percentRatingRound = Math.round(percentRating / 10) * 10;
  return (
    <RatingBox>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <RatingBox.Calc width={percentRatingRound}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </RatingBox.Calc>
    </RatingBox>
  );
};

export default Rating;
