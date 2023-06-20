import { BrowserRouter } from "react-router-dom"
import { Header
, Navbar ,About ,Experience ,Tech ,Works, Contact} from './components'
function App() {
  return (
<BrowserRouter>
<div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat
    bg-center">
      <Navbar/>
      <Header />
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Contact/>
    
</div>
</BrowserRouter>
  )
}

export default App
