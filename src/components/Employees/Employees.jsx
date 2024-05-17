import AddEmployeeForm from "./AddEmployeeForm"
import EmployeesList from "./EmployeesList"
import SearchForm from "./SearchForm"
const Employees = ({ toggleModal }) => {
    return (
        <div className="employees-container">
            <div className="form-container">
                <SearchForm />
                <AddEmployeeForm toggleModal={toggleModal} />
            </div>
            <EmployeesList />
        </div>
    )
}
export default Employees