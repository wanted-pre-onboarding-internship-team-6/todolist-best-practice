import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
  margin: 16% 0;
`;

export const Title = styled.h1`
  margin: 1rem 0;
  font-size: 2.6rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 30rem;
  gap: 0.4rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
`;

export const Input = styled.input`
  font-size: 2rem;
  border-radius: 0.6rem;
  padding: 0.8rem;
`;

export const Div = styled.div`
  margin: 1rem;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1.6rem;
  gap: 1.6rem;

  & button {
    flex: 1;
    font-size: 1.6rem;
    background-color: green;
    color: #fff;
    display: block;
    padding: 1rem;
    border-radius: 0.4rem;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }

  & a {
    flex: 1;
    text-align: center;
    font-size: 1.6rem;
    background-color: aquamarine;
    color: #000;
    display: block;
    padding: 1rem;
    border-radius: 0.4rem;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Button = styled.button``;

export const Span = styled.span`
  color: red;
  font-size: 1.4rem;
  margin-top: 0.4rem;
`;
