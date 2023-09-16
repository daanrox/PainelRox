import { useContext } from 'react'
import { Header } from './components/Header/Header'
import { Painel } from './components/Painel/Painel'
import { GlobalStyle } from './styles/globalStyles'
import { Title1 } from './styles/tipography'
import { PainelContext } from './providers/PainelContext'
import { services } from '../services/database'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Footer } from './components/Footer/Footer'

function App() {

  const {isSession} = useContext(PainelContext)

  return (
    <>
    <GlobalStyle />
     <Header/>
     {isSession ? <>
    <Dashboard/>
    <Painel services={services}/>
     
     </>
     : 
     <Title1>Faça Login</Title1>}
  
      <Footer/>
    </>
  
  )
}

export default App
