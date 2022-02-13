import styled from "@emotion/styled";

export const Searchbar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #f2f2f2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  cursor: pointer;
  outline: none;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  margin-right: 10px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Select = styled.select`
  width: 150px;
  height: 30px;
  border: none;
  margin-right: 30px;
  background-color: transparent;
  font-size: 16px;

  @media only screen and (max-width: 767px) {
    display: inline-block;
    margin-right: 30px;
    margin-top: 30px;
    width: 150px;
  }
`;

export const SelectText = styled.span`
  display: inline-block;
  margin-right: 6px;
`;
