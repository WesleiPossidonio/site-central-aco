import { HeaderTitle, SubTitle, Title } from "./styled"

interface TitleSectionProps {
  TextTitle: string
  TextSubTitle: string
  PositionTitle: 'center' | 'flex-start' | 'flex-end'
  line: boolean
  SubTitleColor: 'text' | 'white'
  
}
export const TitleSection = ({ PositionTitle, TextSubTitle, TextTitle, line, SubTitleColor }: TitleSectionProps) => {
  return (
    <HeaderTitle PositionTitle={PositionTitle}>
      <SubTitle SubTitleColor={SubTitleColor}>{TextSubTitle}</SubTitle>
      <Title TitleColor={SubTitleColor} className="title">{TextTitle}</Title>
      {
        line && <div id="line" />
      }
    </HeaderTitle>
  )
}


