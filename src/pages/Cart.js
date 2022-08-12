import Footer from "../Footer";
import CartHeader from "../CartHeader";
import CardBody from "../CartBody";
import Coupon from "../Coupon";
import Checkout from "../Checkout";
import OrderHistory from "../OrderHistory";

const Cart = () => {
  return (
    <article>
      <CartHeader />
      <CardBody />
      <Coupon />
      <Checkout />
      <OrderHistory />
      <Footer />
    </article>
  );
};

export default Cart;
