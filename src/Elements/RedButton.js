import React from 'react'
import arrow from "../assets/Arrow Right.svg";
import styled from 'styled-components';

const CTA = styled.button`
  background-color: var(--red);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

function RedButton(props) {
  return (
    <CTA> 
        {props.title} &nbsp;
        <img src={arrow} alt="cta" width="100" height="100" />
    </CTA>
  )
}

export default RedButton