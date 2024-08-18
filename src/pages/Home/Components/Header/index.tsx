import { useEffect, useState } from "react"

import Logo from '../../../../assets/logo.png'
import { ContainerHeaderMenu, ImgLogo, NavDesktop, NavLink } from "./styled"

export const HeaderMenu = () => {
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 50) {
        setStateBackgroundHeader(true)
      } else {
        setStateBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ContainerHeaderMenu stateHeader={stateBackgroundHeader}>
      <ImgLogo src={Logo} />

       <NavDesktop>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#home"
        
        >
          Home
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#about"
        
        >
          Sobre Nós
        </NavLink>
    

        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#companies"
        
        >
          Serviços
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#contato"
        
        >
          Contatos
        </NavLink>
      </NavDesktop>
    </ContainerHeaderMenu>
  )
}

