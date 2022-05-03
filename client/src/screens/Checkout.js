import '../styles/Checkout.css';
import Subtotal from '../components/Subtotal';
import CheckoutProduct from '../components/CheckoutProduct';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt='checkout__ad' />

                <div>
                    <h2 className="checkout__title">Shopping Cart</h2>
                    <CheckoutProduct
                        id={101}
                        title="Deception Point by Dan Brown"
                        price="3000"
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61MKKdDbJlL.jpg"
                    />
                </div>
            </div>

            <div className="checkout__right">
                {/* {basket != null && basket.length > 0 ? <Subtotal total={totalPrice} itemCount={basket.length} /> : <></>} */}
                <Subtotal total={3000} itemCount={1} />
            </div>
        </div>
    )
}

export default Checkout