
import styled from "styled-components";

export const ContainerAdvantages = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 45rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  margin: 0 auto;
  padding: 3rem;
`;

export const ContentText = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  p {
    margin-top: 0.4rem;
  }

  // estilização do title
  span {
    font-size: 2.5rem;
    opacity: 0.4;
  }

  .title {
    font-size: 1.8rem;
    top: 0.65rem;
  }
`;

export const ListAdvantages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;
`;

export const AdvantageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.3rem;
  }
`;

export const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;

  position: relative;
`;

interface BoxImageProps {
  widthImage: "imgOne" | "imgTwo";
}

export const BoxImage = styled.div<BoxImageProps>`
  width: ${({ widthImage }) => (widthImage === "imgOne" ? "16rem" : "14rem")};
  height: ${({ widthImage }) => (widthImage === "imgOne" ? "14rem" : "24rem")};
  margin-top: ${({ widthImage }) => (widthImage === "imgOne" ? "-11rem" : "0")};
  background-color: ${({ theme }) => theme.colors["base-bg"]};
`;

export const ImgOne = styled.img`
  width: 16rem;
  height: 17rem;

  margin: -5rem -1.6rem -1.6rem -1.6rem;
  object-fit: cover;

  border: none;
  border-radius: 6px;
`;

export const ImgTwo = styled.img`
  width: 100%;
  height: 24rem;

  object-fit: cover;

  margin: 1.8rem;
  border: none;
  border-radius: 6px;
`;

export const BoxNumber = styled.div`
  width: 13.5rem;
  height: 9rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  text-align: center;
  border: 0;
  border-radius: 6px;

  position: absolute;
  top: 14.5rem;
  right: 10.1rem;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: ${({ theme }) => theme.colors["base-white"]};
`;
