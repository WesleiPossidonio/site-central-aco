import { ThemeProvider } from "styled-components"
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from "react-router-dom"

import { Router } from "./Routes/routes"
import { GlobalStyle } from "./styles/globalstyles"
import { DefaultThemes } from "./styles/theme/default"
import { Footer, HeaderMenu, WhatsappButton } from "./components"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultThemes}>
        <WhatsappButton />
        <HeaderMenu />
        <Router />
        <Footer />
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
