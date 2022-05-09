import '../styles/Orders.css';
import Order from '../components/Order';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Error from './../components/Error';
import { getOrderDetails } from './../redux/actions/OrderActions';
import { useEffect } from 'react';
import Loading from './../components/Loading';


function Orders() {
    const { id } = useParams();

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, error, loading } = orderDetails;

    useEffect(() => {
        if (id) {
            dispatch(getOrderDetails(id));
        } else {
            alert("all orders page will be created");
        }
    }, [dispatch, id]);

    return (
        <>
            {loading && <Loading />}
            {error && <Error error={error} />}
            <div className="orders">
                <h1>Your Orders</h1>
                {/* {orders.map(order =>
                <Order order={order} />
            )} */}
                <Order items={order?.orderItems} totalPrice={order?.totalPrice} createdAt={order?.createdAt} id={order?._id} />
            </div>
        </>
    )
}

export default Orders