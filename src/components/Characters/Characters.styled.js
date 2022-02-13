import styled from "@emotion/styled";

export const Main = styled.main`
  margin-top: 30px;
`;
export const CharactersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
`;

export const Charcter = styled.li`
  border: 1px black solid;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 8px;
  list-style: none;
  margin: 8px;
  flex-basis: calc((100% - 16px * 2) / 2);

  &:hover {
    transform: scale(1.03);
  }

  @media only screen and (min-width: 768px) {
    margin: 8px;
    flex-basis: calc((100% - 16px * 3) / 3);
  }
  @media only screen and (min-width: 1280px) {
    flex-basis: calc((100% - 16px * 4) / 4);
  }

  .img {
    display: block;
    width: 100%;
  }
`;
