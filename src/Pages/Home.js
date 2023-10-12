import React from 'react'
import styled from 'styled-components'
import About from '../Sections/About';
import Faq from '../Sections/Faq';
import Fields from '../Sections/Fields';
import Footer from '../Components/Footer';
import Hero from '../Sections/Hero';
import Steps from '../Sections/Steps';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home(props) {
  return (
    <Container>
      <Hero content={props.content} />
      <About content={props.content}/>
      <Fields content={props.content}/>
      <Steps content={props.content}/>
      <Faq content={props.content}/>
      <Footer content={props.content}/>
    </Container>
  )
}
