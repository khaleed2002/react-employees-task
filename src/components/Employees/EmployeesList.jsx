import "./Employees.css"
import EmployeeCard from './EmployeeCard'
import { useAppContext } from "../../App"
const EmployeesList = () => {
    const { employees } = useAppContext()
    return (
        <div className="main-content">
            {employees?.map((emp, index) => {
                return <EmployeeCard key={index} {...emp} />
            })}
        </div>
    )
}
export default EmployeesList