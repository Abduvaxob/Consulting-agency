import React from 'react'
import styled from 'styled-components';

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;


function SubTitle(props) {
  return (
    <SubText>
      {props.title}
    </SubText>
  )
}

export default SubTitle