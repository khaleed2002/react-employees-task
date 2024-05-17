import './Header.css';
import Profile from './Profile';
import profilePic from '../../assets/profile.jpg'
import { MdNotificationsActive } from "react-icons/md";
import DateTimeDisplay from './DateTimeDisplay';

const Header = () => {
    // const currentDate = new Date().toLocaleString();

    return (
        <div className="header">
            <div className="authentication">
                <Profile name='Khaled Abdelrahman' imgSrc={profilePic} />
                <div className="notification">
                    <div className="notification-container">
                        <span className="notification-span" style={{
                            backgroundColor: "#27b40c"
                        }}>1</span>
                        <MdNotificationsActive color='#8997a4' className="notification-icon"></MdNotificationsActive>

                    </div>

                </div>
                <div className="sign-in-container">
                    <button className="btn sign-in">Sign In</button>
                </div>
            </div>
            <div className="date-container">
                <DateTimeDisplay />
            </div>


        </div >
    );
};

export default Header;
