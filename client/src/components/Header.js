import '../styles/Header.css';
import logo from '../logo.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const cartItemsCount = cartItems.length === 0 ? 0 : cartItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);

    return (
        <div className='header'>
            {/* Amazon Logo */}
            <Link className='link' to='/'>
                <img className='header__logo' src={logo} alt="header__logo" />
            </Link>

            {/* Search bar with a input text field and search button */}
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                {/* Search Button using Material UI */}
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>

            {/* Header Navigation Icons like Sign in, Orders, Cart Navigation*/}
            <div className='header__nav'>
                {/* If no user then navigate to login page */}
                <Link className='link' to='/login'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Hello, Guest
                        </span>
                        <span className='header__optionLineTwo' >
                            Sign In
                        </span>
                    </div>
                </Link>

                <Link className='link' to='/orders'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Returns
                        </span>
                        <span className='header__optionLineTwo'>
                            & Orders
                        </span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Account
                    </span>
                </div>

                <Link className='link' to='/cart'>
                    <div className='header__optionBasket'>
                        <ShoppingCartIcon />
                        <span className='header__optionLineTwo header__basketCount'>
                            {cartItemsCount}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header