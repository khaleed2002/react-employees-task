import Employees from './components/Employees/Employees'
import Modal from './components/Employees/Modal/Modal';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
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
  )
}

export default App
