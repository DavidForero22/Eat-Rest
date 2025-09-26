import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {testApi as APIConnector}  from "./modules/ApiConnector.jsx";

function App() {

  return (
    <>
      <APIConnector/>
    </>
  )
}

export default App
