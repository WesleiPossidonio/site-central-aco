import { Routes, Route } from 'react-router-dom'
import { BarsInGeneral, Home } from '../pages'


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/barras-em-geral' element={<BarsInGeneral/>} />
    </Routes>
  )
}