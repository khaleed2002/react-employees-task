import Employees from './components/Employees/Employees'
import Modal from './components/Employees/Modal/Modal';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { useState, createContext, useContext } from 'react'
import { employees as dummyEmployees } from './utils/constants';
export const AppContext = createContext();
function App() {
  const [employees, setEmployees] = useState(dummyEmployees)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <AppContext.Provider
      value={{ employees, setEmployees }}
    >

      <div className="app-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          <Header />
          <Employees toggleModal={toggleModal} />
        </div>
        {isModalOpen && <Modal onClose={toggleModal} />}
      </div>
    </AppContext.Provider>
  )
}
export const useAppContext = () => useContext(AppContext)

export default App
