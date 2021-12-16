import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Product from "../style/productPage";
import TabComponent from "../components/tab";
import Related from "../components/related";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Rating from "../components/rating";
import WishlistBtn from "../components/wishlistBtn";
import { addItem } from "../redux/cart";
import { notify } from "../components/toast";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  const id = useParams();
  const product = useSelector((state) => state.items.items).filter(
    (item) => item.id === parseInt(id.id, 10)
  )[0];
  const dispatch = useDispatch();
  const handleAddToCart = (itemToAdd) => {
    dispatch(addItem(itemToAdd));
    notify("You ADD item to cart");
  };

  return (
    <Product>
      <Helmet>
        <title>{product.name} | Lorem Ecomerce</title>
      </Helmet>
      <Product.Container>
        <Product.ImgBox>
          <Product.Img src={product.imgUrl} />
        </Product.ImgBox>
        <Product.InfoBox>
          <Product.NameBox>
            <Product.Name>{product.name}</Product.Name>
            {product.tag ? (
              <Product.Tag bg={product.tag === "new" ? "#5BC8AF" : "#0B7189"}>
                {product.tag}
              </Product.Tag>
            ) : (
              ""
            )}
          </Product.NameBox>

          <Product.Category>{product.category}</Product.Category>
          <Product.RatingBox>
            <Rating rate={product.rating} />
            {product.rating}/5
          </Product.RatingBox>

          <Product.Description>{product.description}</Product.Description>
          <Product.Price>
            <FontAwesomeIcon icon={faTag} />${product.price}
          </Product.Price>
          <Product.BtnBox>
            <Product.CartBtn
              onClick={() => handleAddToCart(product)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon icon={faCartPlus} /> Add to cart
            </Product.CartBtn>
            <WishlistBtn itemToAdd={product} />
          </Product.BtnBox>
        </Product.InfoBox>
      </Product.Container>
      <TabComponent />
      <Related category={product.category} id={product.id} />
    </Product>
  );
};

export default ProductPage;
