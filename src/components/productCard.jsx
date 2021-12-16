import Card from "../style/productCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTag, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { addItemToWishlist } from "../redux/wishlist";
import { toggleModal, setCurrentElement } from "../redux/modal";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cart";
import { Link } from "react-router-dom";
import "../style/elements/tooltip.css";
import { notify } from "./toast";

const ProductCard = (props) => {
  const currentProduct = props;
  const { name, category, price, imgUrl, tag, id } = props;
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.items);
  const existingItem = wishList.filter((item) => item.id === id);

  const handleAddToCart = (itemToAdd) => {
    dispatch(addItem(itemToAdd));
    notify(`You add item to cart`);
  };
  const handleAddToWishlist = (itemToAdd, message) => {
    dispatch(addItemToWishlist(itemToAdd));
    notify(message);
  };

  return (
    <div>
      <Card>
        <Card.ImageBox>
          <Link to={`/product/${id}`}>
            <Card.Image
              src={imgUrl}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </Link>
          {tag ? (
            <Card.Tag bg={tag === "new" ? "#5BC8AF" : "#0B7189"}>
              {tag}
            </Card.Tag>
          ) : (
            ""
          )}
          {existingItem.length > 0 ? (
            <Card.WishlistBtn
              color="#CF2626"
              opacity="1"
              onClick={() =>
                handleAddToWishlist(
                  currentProduct,
                  "You REMOVE item from wishlist"
                )
              }
              data-tooltip="Wishlist"
              data-flow="left"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </Card.WishlistBtn>
          ) : (
            <Card.WishlistBtn
              color="#F4F3EF"
              opacity="1"
              onClick={() =>
                handleAddToWishlist(currentProduct, "You ADD item to wishlist")
              }
              data-tooltip="Wishlist"
              data-flow="left"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </Card.WishlistBtn>
          )}
          <Card.QuickView
            onClick={() => {
              dispatch(toggleModal());
              dispatch(setCurrentElement(currentProduct));
            }}
            data-tooltip="Quick view"
            data-flow="left"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faEye} />
          </Card.QuickView>
        </Card.ImageBox>

        <Card.Info>
          <Link to={`/product/${id}`}>
            <Card.Name>{name}</Card.Name>
          </Link>
          <Card.Category>{category}</Card.Category>
          <Card.PriceBox>
            <Card.PriceTag>
              <FontAwesomeIcon icon={faTag} />
            </Card.PriceTag>
            <Card.Price>${price}</Card.Price>
          </Card.PriceBox>
        </Card.Info>
        <Card.Btn
          onClick={() => handleAddToCart(currentProduct)}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faCartPlus} /> Add to cart
        </Card.Btn>
      </Card>
    </div>
  );
};

export default ProductCard;
