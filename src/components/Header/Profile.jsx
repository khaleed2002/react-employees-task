import { SlArrowDown } from "react-icons/sl";

const Profile = ({ name, imgSrc }) => {
    return (
        <div className='profile'>
            <SlArrowDown className='profile-icon' />
            <p className="profile-name">{name}</p>
            <img src={imgSrc} alt="profile image" />
        </div>
    )
}
export default Profile