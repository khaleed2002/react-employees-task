import { FaPlus } from "react-icons/fa6";


const AddEmployeeForm = () => {

    return (
        <div className="add-employee-container">
            <button className="btn add-employee" >
                <FaPlus size={19} />
                <span>Add new</span>
            </button>
        </div>
    )
}
export default AddEmployeeForm