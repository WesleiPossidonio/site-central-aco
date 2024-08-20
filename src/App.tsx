import { ThemeProvider } from "styled-components"
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from "react-router-dom"

import { Router } from "./Routes/routes"
import { GlobalStyle } from "./styles/globalstyles"
import { DefaultThemes } from "./styles/theme/default"
import { HeaderLinks } from "./pages/Home/Components"
import { Footer, HeaderMenu } from "./components"
import { Header } from "./pages/Home/styled"
// import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultThemes}>
        <Header>
          <HeaderLinks />
          <HeaderMenu />
        </Header>
        <Router />
        <Footer />
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
