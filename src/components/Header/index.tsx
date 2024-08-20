import { useEffect, useState } from "react"

import Logo from '../../assets/logo.png'
import { ContainerHeaderMenu, ImgLogo, NavDesktop, NavLink, NavLinkMobile, NavMobile } from "./styled"
import { List, X } from "@phosphor-icons/react"

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
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

  const handleStateMenuMobile = () => {
    setIsOpen((open: boolean) => !open)
  }

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

      {isOpen ? (
        <X size={35} weight="bold" onClick={handleStateMenuMobile} />
      ) : (
        <List size={35} weight="bold" onClick={handleStateMenuMobile} />
      )}

      <NavMobile isOpen={isOpen}>
        <NavLinkMobile href="#home" onClick={handleStateMenuMobile}>
          Home
        </NavLinkMobile>
        <NavLinkMobile href="#about" onClick={handleStateMenuMobile}>
          Sobre Nós
        </NavLinkMobile>
        <NavLinkMobile href="#principes" onClick={handleStateMenuMobile}>
        Serviços
        </NavLinkMobile>
        <NavLinkMobile href="#Contatos" onClick={handleStateMenuMobile}>
          Contatos
        </NavLinkMobile>

      </NavMobile>
    </ContainerHeaderMenu>
  )
}

