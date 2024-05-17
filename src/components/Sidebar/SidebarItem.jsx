const SidebarItem = ({ title, icon }) => {

    return (
        <div className={`sidebar-item ${title === 'employees' ? 'active' : ''}`}>
            <div className="icon-container">
                {title === 'employees' ? <span className="notification-span">5</span> : ""}
                {icon}
            </div>
            <p>{title}</p>
        </div>
    )
}
export default SidebarItem