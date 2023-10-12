import React from 'react'
import { Accordion } from 'react-bootstrap'
import styled from 'styled-components'
import SubTitle from '../Elements/SubTitle';
import Title from '../Elements/Title';
import './Faq.css'



const FaqSection = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 150px;
margin-bottom: 5rem;
@media only Screen and (max-width:40em) {
  margin-top: 3rem;
  margin-bottom: 3rem;
  
}
`;

const FlexContainer = styled.div`
width: 70vw;
display: flex;
align-items: center;
flex-direction: column;
`;

const MainInfo = styled.div`
text-align: center;
 h4{
    margin-top: 30px;
 }
`;


function Faq(props) {
  const content = props.content
  return (
    <FaqSection id="faq">
      <MainInfo>
      <Title title={content.fa1} />
      <SubTitle title={content.fa2} />
      </MainInfo>
    <FlexContainer>
    <Accordion defaultActiveKey="0" className="mt-5 p-3 w-100">
        <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>
                {content.fa3}
            </Accordion.Header>
            <Accordion.Body>
            {content.fa4}
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
            {content.fa5}
            </Accordion.Header>
            <Accordion.Body>
            {content.fa6}
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>
            {content.fa7}
            </Accordion.Header>
            <Accordion.Body>
            {content.fa8}
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </FlexContainer>
    </FaqSection>
  )
}

export default Faq