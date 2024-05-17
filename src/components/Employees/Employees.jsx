import AddEmployeeForm from "./AddEmployeeForm"
import EmployeesList from "./EmployeesList"
import SearchForm from "./SearchForm"

const Employees = () => {
    return (
        <div className="employees-container">
            <div className="form-container">
                <SearchForm />
                <AddEmployeeForm />
            </div>
            <EmployeesList />
        </div>
    )
}
export default Employees