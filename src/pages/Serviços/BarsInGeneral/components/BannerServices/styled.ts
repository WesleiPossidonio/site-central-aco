import styled from "styled-components";

interface ContainerBannerProp {
  ImageBg: string;
}

export const ContainerBanner = styled.div<ContainerBannerProp>`
  width: 100%;
  height: 25rem;

  background-image: url(${({ ImageBg }) => ImageBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: space-around;
  align-items: center;

  filter: brightness(0.8);

  h1 {
    margin-top: 10rem;
    z-index: 2;
  }

  @media (max-width: 545px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    #contentTextBanner {
      margin-top: 3.6rem;
    }

    h1 {
      margin-top: 0;
      text-align: center;
    }
  }
`;
