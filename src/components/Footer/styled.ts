import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 20rem;
  padding: 2.5rem 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors["base-white"]};

  @media (max-width: 696px) {
    height: max-content;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 696px) {
    order: 2;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;

  p {
    cursor: pointer;
  }

  @media (max-width: 696px) {
    order: 3;
    margin-bottom: 2rem;
  }
`;

export const ContentContact = styled(ContentLogo)`
  @media (max-width: 696px) {
    order: 1;
    div{
      width: 100%;
    }
  }
`;

export const ContentLinkSite = styled(ContentLogo)`
  order: 2;
`;

export const LinkSite = styled(ContentLogo)`
  gap: 0.6rem
`;

export const TitleLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ImgLogo = styled.img`
  width: 10rem;
`;
