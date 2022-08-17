import Footer from "../Footer";

import CardBody from "../CartBody";
import Coupon from "../Coupon";
import Checkout from "../Checkout";
import OrderHistory from "../OrderHistory";
import CartHero from "../CartHero";

const Cart = () => {
  return (
    <article>
      <CartHero />
      <CardBody />
      <Coupon />
      <Checkout />
      <OrderHistory />
      <Footer />
    </article>
  );
};

export default Cart;
