import { Navbar, Welcome, Footer, Services, Transactions } from './components'
import { Parallax } from 'react-scroll-parallax'

const App = () => {

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome' >
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
