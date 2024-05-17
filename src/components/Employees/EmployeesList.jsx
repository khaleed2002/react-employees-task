import "./Employees.css"
import { employees } from "../../utils/constants"
import EmployeeCard from './EmployeeCard'
const EmployeesList = () => {

    return (
        <div className="main-content">
            {employees.map((emp, index) => {
                return <EmployeeCard key={index} {...emp} />
            })}
        </div>
    )
}
export default EmployeesList