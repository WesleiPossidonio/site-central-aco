import { Routes, Route } from 'react-router-dom'
import { BarsInGeneral, Cantobeiras, ChapasEmGeral, Home } from '../pages'



export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/barras-em-geral' element={<BarsInGeneral/>} />
      <Route path='/chapas-em-geral' element={<ChapasEmGeral/>} />
      <Route path='/cantoneira' element={<Cantobeiras/>} />
    </Routes>
  )
}