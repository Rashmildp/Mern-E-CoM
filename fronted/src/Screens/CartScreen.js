import './CartScreen.css';
import CartItem from '../Component/CartItem'
import CartTtem from '../Component/CartItem';


const CartScreen=()=>{
    return(
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>
                    Shopping Cart
                </h2>
                <CartItem/>
                <CartTtem/>
                <CartItem/>
                <CartTtem/>
                <CartItem/>
                <CartTtem/>



            </div>
            <div className="cartscreen__right">
               <div className="cartscreen__info">
                   <p>Subtotal (0) Items</p>
                   <p>$499.99</p>
                  </div> 
                  <div>
                      <button>Proceed to Checkout</button>
                  </div>
            </div>
  

        </div>

    )
}
export default CartScreen;