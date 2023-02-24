import styled from 'styled-components';

export const Container = styled.div`
  margin: 2.6rem auto;
`;

export const Li = styled.li`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
`;

export const Input = styled.input`
  padding: 1.2rem;
  display: inline-block;
  font-size: inherit;

  &.checkbox {
    width: 3rem;
    height: 2.4rem;
    display: inline-block;
    cursor: pointer;
    margin: 0;
    margin-right: 1rem;
  }
`;

export const Span = styled.span`
  font-size: 2.4rem;
  display: inline-block;
  line-height: 2;
`;

export const Label = styled.label`
  padding: 1.2rem 2.6rem;
`;

export const Button = styled.button`
  padding: 1rem;
  margin: 1rem;
  font-size: inherit;
  font-weight: 500;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Contents = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 0 auto;
`;
