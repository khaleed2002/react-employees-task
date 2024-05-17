import Employees from './components/Employees/Employees'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <Header />
        <Employees />
      </div>
    </div>
  )
}

export default App
