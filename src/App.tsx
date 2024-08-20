import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/globalstyles"
import { DefaultThemes } from "./styles/theme/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes/routes"

import { HeaderLinks } from "./pages/Home/Components"
import { Footer, HeaderMenu } from "./components"
import { Header } from "./pages/Home/styled"


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
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
