import '../styles/Orders.css';
import Order from '../components/Order';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Error from './../components/Error';
import { getOrderDetails, getOrderListDetails } from './../redux/actions/OrderActions';
import { useEffect } from 'react';
import Loading from './../components/Loading';


function Orders() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, error, loading } = orderDetails;

    const orderList = useSelector((state) => state.orderList);
    const { orders, loadingOrders, errorOrders } = orderList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo === null) {
            navigate("/login", { replace: true });
        } else {
            if (id) {
                dispatch(getOrderDetails(id));
            }
            dispatch(getOrderListDetails());
        }
    }, [userInfo, navigate, dispatch, id]);

    return (
        <>  {id
            ? <>
                <div className="orders">
                    <h1>Your Order</h1>
                    <Order items={order?.orderItems} totalPrice={order?.totalPrice} createdAt={order?.createdAt} id={order?._id} />
                    {loading && <Loading />}
                    {error && <Error error={error} />}
                </div>
            </>
            : <>
                <div className="orders">
                    <h1>Your Orders ({orders?.length})</h1>
                    {orders?.map(order =>
                        <Order key={order?._id} items={order?.orderItems} totalPrice={order?.totalPrice} createdAt={order?.createdAt} id={order?._id} />
                    )}
                    {loadingOrders && <Loading />}
                    {errorOrders && <Error error={errorOrders} />}
                </div>
            </>}

        </>
    )
}

export default Orders