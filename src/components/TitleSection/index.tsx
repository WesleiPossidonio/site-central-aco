import { HeaderTitle, Line, SubTitle } from "./styled"

interface TitleSectionProps {
  TextSubTitle: string
  PositionTitle: 'center' | 'flex-start' | 'flex-end'
  line: boolean
  SubTitleColor: 'text' | 'white' | 'gray-200'
}

export const TitleSection = ({ PositionTitle, TextSubTitle, line, SubTitleColor }: TitleSectionProps) => {
  return (
    <HeaderTitle PositionTitle={PositionTitle}>
      <SubTitle SubTitleColor={SubTitleColor}>{TextSubTitle}</SubTitle>
      {
        line && <Line SubTitleColor={SubTitleColor} />
      }
    </HeaderTitle>
  )
}


