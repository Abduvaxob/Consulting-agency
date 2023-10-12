
import React from 'react'
import styled from 'styled-components';

const MainTitle = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  color: black ;
`;

function Title(props) {
  return (
    <MainTitle>{props.title}</MainTitle>
  )
}

export default Title;