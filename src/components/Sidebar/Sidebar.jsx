
import './Sidebar.css'
import SidebarItem from './SidebarItem'
import { sidebarItems } from '../../utils/constants'
const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar-items-container">
        {sidebarItems.map((item) => {
          return <SidebarItem key={item.id} {...item}></SidebarItem>
        })}
      </div>

    </div>
  )
}
export default Sidebar