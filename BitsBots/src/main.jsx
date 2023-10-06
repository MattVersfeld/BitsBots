import React from 'react'
import ReactDOM from 'react-dom/client'
import Task from './components/Task'
import './index.css'



function App() {

  return (
    <React.StrictMode>
      <Task />
    </React.StrictMode>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

