import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LivroProvider } from './context/LivroContext'
import Cadastro from './pages/Cadastro'
import Lista from './pages/Lista'
import Navbar from './components/Navbar'

function App() {
  return (
    <LivroProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Lista />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </LivroProvider>
  )
}

export default App
