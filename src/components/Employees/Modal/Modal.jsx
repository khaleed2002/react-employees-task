import ReactDOM from 'react-dom';
import './Modal.css';
import InputField from './InputField';
import SelectField from './SelectField';

const Modal = ({ onClose }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
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
                            <SelectField name={"attendance"} label={"Attendance Profile"} options={["Attendance Profile"]} required={true} />
                        </div>
                        <div className="input-group">

                            <SelectField name={"role"} label={"Role"} options={["HR Manager", "Software Engineer"]} required={true} />
                            <SelectField name={"position"} label={"Position"} options={["HR Manager", "Software Engineer"]} required={true} />
                        </div>
                        <SelectField name={"direct_manager"} label={"Direct Manager"} options={["Abdelrahman", "Abdelrahman"]} required={true} />
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
                    <button className="save-button">Save</button>
                    <button className="cancel-button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
