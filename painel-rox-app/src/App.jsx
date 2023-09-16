import { useContext } from 'react'
import { Header } from './components/Header/Header'
import { Painel } from './components/Painel/Painel'
import { GlobalStyle } from './styles/globalStyles'
import { Title1 } from './styles/tipography'
import { PainelContext } from './providers/PainelContext'
import { services } from '../services/database'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Footer } from './components/Footer/Footer'
import Modal from 'react-modal'
import { ModalStyles } from './styles/modalStyles'
import { ModalPainel } from './components/Modal/ModalPainel'
import { Home } from './components/Home/Home'

Modal.setAppElement('#root')


function App() {

  const { isSession, modalIsOpen, setModalIsOpen, closeModal } = useContext(PainelContext)


  return (
    <>
      <GlobalStyle />
      <ModalStyles/>
      <Header />
      {isSession ? <>
        <Dashboard />
        <Painel services={services} />
      </>
        :
        <>
        <Title1>Faça Login</Title1>
        <Home/>

        </>
        }
        
      <Footer />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='' overlayClassName='modal-overlay' className='modal-content'>
        <ModalPainel/>
      </Modal>
    </>

  )
}

export default App
