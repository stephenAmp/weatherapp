import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
export default function App(){

  return(
    <>
    <div className='app-container'>
      <Sidebar/>
      <div className='main-page'>
         <Header/>
         <div className='weather-dashboard'>
        
        </div>
      </div>
    </div>
    </>
  )
}