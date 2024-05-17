import ReactDOM from 'react-dom';
import './Modal.css';
import InputField from './InputField';
import SelectField from './SelectField';
import getFormValues from '../../../utils/getFormValues';
import { useAppContext } from '../../../App'
import empPic from "../../../assets/profile.jpg"
import { nanoid } from 'nanoid';

const Modal = ({ onClose }) => {
    const { setEmployees } = useAppContext()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const { isEmpty, data } = getFormValues(e.currentTarget)
        if (isEmpty) {
            console.log("Should provide all values!");
            return
        }
        const newEmployee = { ...data, id: nanoid(), empPic }
        console.log(newEmployee);
        setEmployees((employees) => {
            const newEmployees = [...employees, newEmployee]
            return newEmployees
        })
        e.currentTarget.reset()
        onClose()
    }

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <form className="modal-content" onSubmit={handleFormSubmit}>
                <div className="modal-header">
                    <h2>NEW EMPLOYEE</h2>
                </div>
                <hr className="header-line" />
                <div className="section">
                    <h3>Personal Info</h3>
                    <hr className="section-line" />
                    <div className="personal-info">
                        <div className="image-upload">DROP IMAGE HERE</div>
                        <div className="input-group">
                            <InputField name="name" label={"Name"} required={true} type={"text"} />
                            <InputField name="date" label={"Start Date"} required={true} type={"date"} defaultValue={"2020-03-20"} />
                            <InputField name="phone" label={"Phone"} required={false} type={"text"} />
                            <InputField name="email" label={"Email"} required={true} type={"text"} />
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h3>Office Info</h3>
                    <hr className="section-line" />
                    <div className="office-info">
                        <select>
                            <option>Office</option>
                        </select>
                        <div className="input-group">
                            <SelectField name={"department"} label={"Department"} options={["Bussiness Development", "IT"]} required={true} />
                            <SelectField name={"status"} label={"Attendance Profile"} options={["present", "absent", "weekend", "holiday"]} required={true} />
                        </div>
                        <div className="input-group">

                            <SelectField name={"role"} label={"Role"} options={["HR Manager", "Software Engineer"]} required={true} />
                            <SelectField name={"position"} label={"Position"} options={["HR Manager", "Software Engineer"]} required={true} />
                        </div>
                        <SelectField name={"direct_manager"} label={"Direct Manager"} options={["Abdelrahman", "Mona"]} required={true} />
                    </div>
                </div>
                <div className="section">
                    <h3>Work From Home</h3>
                    <hr className="section-line" />
                    <div className="work-from-home">
                        <input type="checkbox" id="work-from-home" />
                        <label htmlFor="work-from-home">Allow Employee To Work From Home</label>
                    </div>
                </div>
                <hr className="footer-line" />
                <div className="modal-footer">
                    <button type="submit" className="save-button">Save</button>
                    <button className="cancel-button" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
