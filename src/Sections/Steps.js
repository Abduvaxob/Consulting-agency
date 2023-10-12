import React from 'react'
import styled from 'styled-components'
import SubTitle from '../Elements/SubTitle';
import Title from '../Elements/Title';
import StepsImg from '../assets/steps.avif'


const StepsSection = styled.section`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 150px;
@media only Screen and (max-width:40em) {
  margin-top: 3rem;
}
`;

const MainInfo = styled.div`
text-align: center;
 h4{
    margin-top: 30px;
 }
`;

const Content = styled.div`
width: 70vw;
display: flex;
align-items: center;
flex-direction: column;
@media Screen and (max-width: 900px) {
  display: none;
}
`;

const ContentMobile = styled.div`
width: 70vw;
display: flex;
align-items: center;
flex-direction: column;
display: none;
@media Screen and (max-width: 900px) {
  display: block;
}
`;

const StepsImage = styled.img`
display: block;
margin-top: 40px;
padding-right: 96px!important;
padding-left: 64px!important;
`;

const StepsInfo = styled.div`
display: grid;
grid-column-gap: 24px;
grid-template-columns: repeat(5,1fr);
margin-top: 24px!important;
`;

const StepText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #718096;
    font-weight: 500;
    line-height: 1.5;
    strong {
      display: block;
      font-weight: 600;
      color: #000000;
    }
`;

const MobileStep = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: calc(0.5rem + 1vw);
    line-height: 1.5;
    margin-top : 5rem;
    p {
      margin-top: 1rem;
    }
`;


function Steps(props) {
  const content = props.content
  return (
    <StepsSection id="steps">
      <MainInfo>
            <Title title={content.s1} />
            <SubTitle title={content.s2}/>
        </MainInfo>
      <Content>
        
        <StepsImage src={StepsImg} />
        <StepsInfo>
          <StepText>
            <strong>{content.s3}</strong>
            <div> 
            {content.s4}
            </div>
          </StepText>
          <StepText>
            <strong>{content.s5}</strong>
            <div> 
            {content.s6}
            </div>
          </StepText>
          <StepText>
            <strong>{content.s7}</strong>
            <div> 
            {content.s8}
            </div>
          </StepText>
          <StepText>
            <strong>{content.s9}</strong>
            <div> 
            {content.s10}
            </div>
          </StepText>
          <StepText>
            <strong>{content.s11}</strong>
            <div> 
            {content.s12}
            </div>
          </StepText>
        </StepsInfo>
      </Content>
      <ContentMobile>
          <MobileStep>
              <h3>{content.s3} </h3>
              <p>{content.s4}</p>
          </MobileStep>
          <MobileStep>
              <h3>{content.s5}</h3>
              <p>{content.s6}</p>
          </MobileStep>
          <MobileStep>
              <h3>{content.s7}</h3>
              <p>{content.s8}</p>
          </MobileStep>
          <MobileStep>
              <h3>{content.s9}</h3>
              <p>{content.s10}</p>
          </MobileStep>
          <MobileStep>
              <h3>{content.s11}</h3>
              <p>{content.s12}</p>
          </MobileStep>
      </ContentMobile>
    </StepsSection>
  )
}

export default Steps