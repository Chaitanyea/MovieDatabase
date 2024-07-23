import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.scss'
import home from './components/Home/home'
import Header from './components/header'
import Footer from './components/footer'
import detail from './components/Listing/detail'
import errorpage from './components/errorpage'

function App() {

  return (
   <div className='App'>
    <Router>
      <Header></Header>
      <div className='container'>
      <Routes>
        <Route path='/' Component={home}></Route>
      <Route path='/movieDetails/:imdbID' Component={detail}></Route>
      <Route Component={errorpage}></Route>
      </Routes>
      </div>
      <Footer></Footer>
    </Router>
   </div>
  )
}

export default App
