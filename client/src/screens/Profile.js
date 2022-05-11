import React, { useEffect, useState } from 'react'
import '../styles/Profile.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../redux/actions/UserActions';
import { ToastContainer, toast } from 'react-toastify';
import Error from '../components/Error';

function Profile() {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toastId = React.useRef(null);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { error } = userUpdateProfile;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (userInfo === null) {
            navigate("/login", { replace: true });
        } else {
            setName(userInfo?.name);
            setEmail(userInfo?.email);
        }
    }, [userInfo, navigate]);

    const notify = (message, type) => {
        if (!toast.isActive(toastId.current)) {
            if (type === "error") {
                toastId.current = toast.error(message);
            } else if (type === "success") {
                toastId.current = toast.success(message);
            } else {
                toastId.current = toast.info(message);
            }
        }
    }

    const updateHandler = (e) => {
        e.preventDefault();
        // Password match check
        if (password !== confirmPassword) {
            notify("Password does not match", "error");
        } else {
            // UPDATE PROFILE
            if (password === '' || confirmPassword === '') {
                if (name === userInfo?.name && email === userInfo?.email) {
                    notify("No changes are made", "error");
                } else if (name === userInfo?.name && email !== userInfo?.email) {
                    dispatch(updateUserProfile({ id: userInfo?._id, email }));
                    notify("Email Updated", "success");
                } else if (name !== userInfo?.name && email === userInfo?.email) {
                    dispatch(updateUserProfile({ id: userInfo?._id, name }));
                    notify("Name Updated", "success");
                } else {
                    dispatch(updateUserProfile({ id: userInfo?._id, name, email }));
                    notify("Name and Email Updated", "success");
                }
            } else {
                dispatch(updateUserProfile({ id: userInfo?._id, name, email, password }));
                setPassword('');
                setConfirmPassword('');
                notify("Profile Updated", "success");
            }
        }
    }

    return (
        <>
            <ToastContainer
                style={{ marginTop: "50px" }}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                draggable={false}
                autoClose={2000}
            />
            {error ? <Error error={error} /> : null}
            <div className="profile__outer">
                <div className="profile">
                    <div className="profile__nav">
                        <Link style={{ textDecoration: 'none' }} to="/account">
                            <p className="profile__account">Your Account</p>
                        </Link>
                        <ArrowRightIcon className="arrow__icon" fontSize='small' />
                        <span>Login & Security</span>
                    </div>
                    <p className="profile__title">Login & Security</p>
                    <div className="profile__list">
                        <div className="profile__list__row">
                            <div className="profile__list__row__left">
                                <span>Name:</span>
                                <p>{userInfo?.name}</p>
                            </div>
                            <div className="profile__list__row__left">
                                <span>New Name:</span>
                                <div className="new__input">
                                    <input
                                        type="text"
                                        placeholder="New name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="profile__list__row">
                            <div className="profile__list__row__left">
                                <span>E-mail:</span>
                                <p>{userInfo?.email}</p>
                            </div>
                            <div className="profile__list__row__left">
                                <span>New E-mail:</span>
                                <div className="new__input">
                                    <input
                                        type="email"
                                        placeholder="New email"
                                        required={true}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="profile__list__row last__row">
                            <div className="profile__list__row__left">
                                <span>New Password:</span>
                                <div className="new__input">
                                    <input
                                        type="password"
                                        placeholder="New password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="profile__list__row__left">
                                <span>Confirm Password:</span>
                                <div className="new__input">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="edit__button" onClick={e => updateHandler(e)}>Update</button>
                </div>
            </div>
        </>
    )
}

export default Profile