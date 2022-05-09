import moment from 'moment';
import '../styles/Order.css';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ items, totalPrice, createdAt, id }) {
    return (
        <div className="order">
            <div className="order__header">
                <div className="order__header__left">
                    <CurrencyFormat
                        renderText={(value) => (
                            <p className="order__total">TOTAL<p>{value}</p></p>
                        )}
                        decimalScale={2}
                        // value={order.data.amount / 100}
                        value={totalPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                        className="order__total"
                    />
                    <p className="order__date">
                        ORDER PLACED:
                        <p>{moment(createdAt).format("DD MMMM YYYY")}</p>
                    </p>
                </div>
                <div className="order__header__right">
                    <p className="order__id">
                        ORDER #
                        <small>{id}</small>
                    </p>
                </div>
            </div>

            <div className="order__items">
                {items?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        orderPageButton={true}
                        subTotal={item.price * item.quantity}
                        quantity={item.quantity}
                    />
                ))}
            </div>

        </div>
    )
}

export default Order