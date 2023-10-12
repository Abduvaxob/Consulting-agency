import React from 'react'
import styled from 'styled-components'
import SideHotel from '../assets/hotels.png'
import SideRestaurant from '../assets/restaurant.png'
import SideDelivery from '../assets/delivery.png'
import SideWorker from '../assets/farm.png'
import Title from '../Elements/Title';
import SubTitle from '../Elements/SubTitle';


const FieldsSection = styled.section`
width: 100%;
margin-top: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const MainInfo = styled.div`
text-align: center;
 h4{
    margin-top: 30px;
 }
`;

const FlexContainer = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    @media only Screen and (max-width: 64em) {
      flex-direction: ${(props) => (props.direction === "column" ? "column-reverse" : "column")};
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;

  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
    
  }
`
const SideInfo = styled.div`
    font-size: calc(0.5rem + 1vw);
    line-height: 1.5;
    @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`

const SideImg = styled.img`
    width: 50%;
    @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`



function Fields(props) {
    const content = props.content
  return (
    <FieldsSection id="fields">
        <MainInfo className='main-info'>
            <Title title={content.f1} />
            <SubTitle title={content.f2} />
        </MainInfo>
        <FlexContainer direction="column">
            <SideInfo className='side-info'>
                <h2>
                    {content.f3}
                </h2>
                <p>
                    {content.f4}
                </p>
                
            </SideInfo>
            <SideImg src={SideHotel} />
        </FlexContainer>
        <FlexContainer >
            <SideImg src={SideRestaurant} />
            <SideInfo className='side-info'>
                <h2>
                    {content.f5}
                </h2>
                <p>
                    {content.f6}
                </p>
                
            </SideInfo>
        </FlexContainer>
        <FlexContainer direction="column">
            <SideInfo className='side-info'>
                <h2>
                    {content.f7}
                </h2>
                <p>
                    {content.f8}
                </p>
            </SideInfo>
            <SideImg src={SideDelivery} />
        </FlexContainer>
        <FlexContainer>
            <SideImg src={SideWorker} />
            <SideInfo className='side-info'>
                <h2>
                    {content.f9}
                </h2>
                <p>
                    {content.f10}
                </p>
            </SideInfo>
        </FlexContainer>
    </FieldsSection>
  )
}

export default Fields