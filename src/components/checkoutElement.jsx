import Element from "../style/checkoutPage/checkoutElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItem, reduceItem, removeItem } from "../redux/cart";

const CheckoutElement = ({ item }) => {
  const dispatch = useDispatch();

  const { name, category, imgUrl, price, quantity } = item;
  return (
    <Element>
      <Element.ImgBox>
        <Element.Img src={imgUrl} />
      </Element.ImgBox>
      <Element.Name>{name}</Element.Name>
      <Element.Category>{category}</Element.Category>
      <Element.Price>${price}</Element.Price>
      <Element.CounterBox>
        <Element.CounterIcon onClick={() => dispatch(reduceItem(item))}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Element.CounterIcon>
        <Element.Counter>{quantity}</Element.Counter>
        <Element.CounterIcon onClick={() => dispatch(addItem(item))}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Element.CounterIcon>
      </Element.CounterBox>
      <Element.RemoveBtn onClick={() => dispatch(removeItem(item))}>
        <FontAwesomeIcon icon={faTimes} />
      </Element.RemoveBtn>
    </Element>
  );
};

export default CheckoutElement;
