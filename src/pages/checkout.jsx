import Checkout from "../style/checkoutPage";
import CheckoutElement from "../components/checkoutElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const CheckoutPage = () => {
  const cartTotal = useSelector((state) => state.cart.items).reduce(
    (acumulator, cartItem) => acumulator + cartItem.price * cartItem.quantity,
    0
  );
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Checkout>
      <Helmet>
        <title>Checkout | Lorem Ecomerce</title>
      </Helmet>
      <Checkout.Box>
        <Checkout.Title>Your cart:</Checkout.Title>
        {cartItems.length === 0 ? (
          <Checkout.EmptyCart>Your cart is empty</Checkout.EmptyCart>
        ) : (
          cartItems.map((item) => <CheckoutElement key={item.id} item={item} />)
        )}

        {cartItems.length === 0 ? (
          ""
        ) : (
          <Checkout.ButtonBox>
            <Checkout.CheckoutBtn>
              <FontAwesomeIcon icon={faMoneyCheckAlt} /> Place Order $
              {cartTotal}
            </Checkout.CheckoutBtn>
          </Checkout.ButtonBox>
        )}
      </Checkout.Box>
    </Checkout>
  );
};

export default CheckoutPage;
