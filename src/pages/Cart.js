import Footer from "../Footer";
import CartHeader from "../CartHeader";
import CardBody from "../CartBody";
import Coupon from "../Coupon";
import Checkout from "../Checkout";

const Cart = () => {
  return (
    <article>
      <CartHeader />
      <CardBody />
      <Coupon />
      <Checkout />
      <Footer />
    </article>
  );
};

export default Cart;