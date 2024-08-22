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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
  }

   a {
    font-weight: 700;
    cursor: pointer;
  }

  #company-img {
    width: 5.5rem;
  }

    &:hover {
      a {
        color : ${({ theme }) => theme.colors["base-bg"]};
    }

        
      }

  @media (max-width: 696px) {
    order: 3;
    margin-top: 1.5rem;
  }
`;

export const ContentLinkLogo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`

export const ContentContact = styled(ContentLogo)`
  @media (max-width: 696px) {
    order: 2;
    margin-top: 0;
    div {
      width: 100%;
    }
  }
`;

export const ContentLinkSite = styled(ContentLogo)`
  order: 2;

  @media (max-width: 696px) {
    margin: 0;

    div {
      margin: 0;
    }
  }
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

  p {
    cursor: pointer;

    &:hover {
      color: ${({theme}) => theme.colors["base-bg"]};
    }
  }
`;

export const ImgLogo = styled.img`
  width: 10rem;
`;
