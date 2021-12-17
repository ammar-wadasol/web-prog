import Abc from './header'
import Footer from './footer'
import Main from './main'

function App() {
  return (
    <div className='h-screen flex flex-col justify-between bg-gray-200'>
      <Abc />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
