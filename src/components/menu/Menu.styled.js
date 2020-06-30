import styled from 'styled-components';

export const StyledMenu = styled.nav`
  height: 100vh;
  width: 100%;
  background-color: #ffdd00;
  z-index: -100;


  p {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

  }
`;
