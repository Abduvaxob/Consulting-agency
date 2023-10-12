import { width } from '@mui/system';
import React from 'react';
import styled from "styled-components";


const ConnectSection = styled.section`
  padding: 0 5rem;
  margin-top : 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    padding: 0 4vw;
    margin-top : 5rem;
    
  }
`;

function Connect() {
  return (
    <ConnectSection>
        <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSf39lAoyQXSmdN-VPerGylWfq6sX28ruIuw_A4fLkMZsc1gnw/viewform?embedded=true" 
        width="640" 
        height="1279" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0" />
        
    </ConnectSection>
  )
}

export default Connect;