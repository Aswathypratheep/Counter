import React from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div style={{marginLeft:"34rem"}}>
      <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{height:'100vh'}}>
        <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded' style={{backgroundColor:'white'}}>
          <h2 className='text-primary'>Counter Application</h2>
          <Counter/>
        </div>
      </div>
    </div>
  )
}

export default App
