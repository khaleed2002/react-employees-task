import { FaPlus } from "react-icons/fa6";


const AddEmployeeForm = ({ toggleModal }) => {

    return (
        <div className="add-employee-container">
            <button className="btn add-employee" onClick={toggleModal}>
                <FaPlus size={19} />
                <span>Add new</span>
            </button>
        </div>
    )
}
export default AddEmployeeForm