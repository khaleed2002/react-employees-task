import { IoMdInformation } from 'react-icons/io';
import { MdEdit, MdOutlinePauseCircleOutline, MdDeleteForever, MdMail, MdCallEnd } from "react-icons/md";
import { useAppContext } from '../../App';
const EmployeeCard = ({ name, position, department, empPic, status, id }) => {
    const { setEmployees } = useAppContext()
    const handleDeleteButton = () => {
        setEmployees((employees) => {
            return employees?.filter((emp) => emp.id !== id)
        })
    }
    return (
        <div className="employee-card">
            <div className="left-handside-container">
                <div className="employee-image-container">
                    <img src={empPic} alt="" />
                </div>
                <div className="buttons-container">
                    <button className="edit">
                        <MdEdit className="button-icon"></MdEdit>
                    </button>
                    <button className="pause">
                        <MdOutlinePauseCircleOutline className="button-icon" />
                    </button>
                    <button className="delete" onClick={handleDeleteButton}>
                        <MdDeleteForever className="button-icon" />
                    </button>
                </div>
            </div>
            <div className="right-handside-container">
                <div className="card-header">
                    <h3>{name}</h3>
                    <p className="position">{position}</p>
                    <p className="department">{department}</p>
                </div>
                <div className="card-footer">
                    <p className={status}>{status}</p>
                    <div className="card-footer-icons">
                        <button className="card-footer-icon-container">
                            <MdMail className="icon" />
                        </button>
                        <button className="card-footer-icon-container">
                            <MdCallEnd className="icon" />
                        </button>
                        <button className="card-footer-icon-container">
                            <IoMdInformation className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeCard