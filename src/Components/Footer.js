import React from 'react'
import styled from 'styled-components'
import Whatsapp from '../assets/Whatsapp.png'
import Email from '../assets/Email.png'
import Instagram from '../assets/Instagram.png'
import Telegram from '../assets/Telegram.png'
import Facebook from '../assets/facebook.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, } from "react";
import { gsap } from "gsap";

const FooterSection = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
background-color: var(--nav);
padding: 5rem 5rem;
min-height: 45vh;
color: var(--white);
@media only Screen and (max-width:48em) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  min-height: 25vh;
  padding: 3vw;
}
`
const Adress = styled.div`
    h4 {
        font-size: 1.25rem;
        margin-bottom: 16px;
    }
    p {
        color: rgb(143, 146, 150);
        font-size: 1rem;
    }
`;
const Sections = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    margin-bottom: 1rem 0;
    font-size: 1.25rem;
    a{
        color: var(--white);
        margin-bottom: 8px;
    }
`

const Links = styled.div`
font-size: 1.25rem;
    div {
        display: flex;
        flex-direction: column;
    }

`;

const Social = styled.a`
display: flex;
align-items: center;
    img {
        width: 48px;
        height: 48px;
        margin-right: 16px;
    }
    p {
        margin-bottom: 0;
        font-size: 1rem;
        @media only Screen and (max-width: 40em) {
          font-size: 0.8rem;
  }
    }
`

function Footer( props) {
  const content = props.content

    const ref = useRef(null);
  
    gsap.registerPlugin(ScrollTrigger);
  
    const scrollUp = (id, e) => {
      e.preventDefault();
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    };
  

    useEffect(() => {
        const element = ref.current;
    
        const mq = window.matchMedia("(max-width: 40em)");
        console.log("mq", mq);
        if (mq.matches) {
          gsap.to(element, {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            padding: "1rem 2.5rem", 
    
            borderRadius: "0 0 50px 50px",
    
            border: "2px solid var(--white)",
    
            duration: 1,
            ease: "power1.out",
    
            scrollTrigger: {
              trigger: element,
              start: "bottom+=200 top",
              end: "+=100",
              scrub: true,
            },
          });
        } else {
          gsap.to(element, {
            position: "fixed",
            top: "1rem",
            left: "3rem",
            right: "3rem",
            padding: "1.5rem 2rem",
    
            borderRadius: "50px",
    
            border: "3px solid var(--white)",
    
            duration: 1,
            ease: "power1.out",
    
            scrollTrigger: {
              trigger: element,
              start: "bottom+=300 top",
              end: "+=250",
              scrub: true,
            },
          });
        }
      }, []);

  return (
    <FooterSection>
        <Adress>
            <h4>{content.fu1}</h4>
            <p>Scheddebrock 39<br />
                48356 Nordwalde
                NRW    
            </p>
        </Adress>
        <Sections>
            <a href="#home" onClick={(e) => scrollUp("home", e)}>
            {content.fu2}
            </a>
            <a href="#home" onClick={(e) => scrollUp("about", e)}>
            Sommerjob
            </a>
            <a href="#home" onClick={(e) => scrollUp("fields", e)}>
            {content.fu3}
            </a>
            <a href="#home" onClick={(e) => scrollUp("steps", e)}>
            {content.fu4}
            </a>
            <a href="#home" onClick={(e) => scrollUp("faq", e)}>
            {content.fu5}
            </a>
        </Sections>
        <Links>
            <Social href='#'>
                <img src={Whatsapp} alt="Could not download the image" width="400" height="400" />
                <p>+49176684247617</p>
            </Social>
            <Social href='mailto:connect.consulting.com@gmail.com'>
                <img src={Email} alt="Could not download the image" width="400" height="400" />
                <p>connect.consulting.uz@gmail.com</p>
            </Social>
            <Social href='https://www.instagram.com/connect.cons/'>
                <img src={Instagram} alt="Could not download the image" width="400" height="400" />
                <p >connect.cons</p>
            </Social>
            <Social href='https://t.me/connect_cons'>
                <img src={Telegram} alt="Could not download the image" width="400" height="400" />
                <p>connect_cons</p>
            </Social>
            <Social href='https://www.facebook.com/cons.connect/professional_dashboard/insights/page/?ref=comet_direct_url_navigation'>
                <img src={Facebook} alt="Could not download the image" width="400" height="400" />
                <p>cons.connect</p>
            </Social>
        </Links>
    </FooterSection>
  )
}

export default Footer