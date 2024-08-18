import { ReactNode } from "react"
import { ContainerButton } from "./styled"

interface ButtonProps {
  children: ReactNode
  btnLarge: boolean
  bgColor: 'bg' | 'white'
}

export const Button = ({ children, btnLarge, bgColor }: ButtonProps) => {
  return (
    <ContainerButton btnLarge={btnLarge} bgColor={bgColor}>
      {children}
    </ContainerButton>
  )
}

