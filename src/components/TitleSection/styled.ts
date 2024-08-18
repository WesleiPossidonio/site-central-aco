import styled from "styled-components";

interface HeaderTitleProps {
  PositionTitle: "center" | "flex-start" | "flex-end";
}

export const HeaderTitle = styled.div<HeaderTitleProps>`
  width: ${({ PositionTitle }) => PositionTitle === 'center' ? 'none' : '100%'};
  display: flex;
  align-self: ${({ PositionTitle }) => PositionTitle};
  justify-content: center;
  position: relative;

  display: flex;
  flex-direction: column;

  #line {
    width: 6%;
    margin: 0 0 2rem 0.4rem;
    border-bottom: 4px solid #fff;
  }

  h1 {
    left: ${({ PositionTitle }) => PositionTitle === "center" && "3.3rem"};
  }
`;

interface SubTitleProps {
  SubTitleColor: "text" | "white";
}

export const SubTitle = styled.span<SubTitleProps>`
  opacity: ${({ SubTitleColor }) => (SubTitleColor === "text" ? "0.5" : "0.7")};
  font-size: 2.9rem;
  font-weight: 600;
`;

interface TitleProps {
  TitleColor: "text" | "white";
}

export const Title = styled.h1<TitleProps>`
  font-size: 1.7rem;
  font-weight: 600;
  opacity: 1;

  position: absolute;
  top: 1rem;
  left: 1.4rem;

  color: ${({ theme, TitleColor }) =>
    theme.colors[`base-${TitleColor ?? "text"}`]};
`;
