import React from 'react';
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
  div:first-of-type {
    min-width: 25rem;
  }
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
    div:first-of-type {
    min-width: 0rem;
  }
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  min-width: 2rem;
  a {
    font-size: 1.5rem;
    color: var(--yellow);
  }
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
  @media only Screen and (max-width: 40em) {
    a {
    font-size: 0.5rem
    color: var(--yellow);
  }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 0.3s;
  div:first-of-type {
  max-width: 7rem!important;
  min-width: 5rem;
  }
  @media only Screen and (max-width: 48em) {
    display: none;
  }
    div{
    margin-right: 1rem;
    color: var(--white);
     label{
      color: var(--white);
     }
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child) {
      margin-right: 4rem;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--red);
    }
  }
`;

const Button = styled.button`
  background-color: var(--red);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;
const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  div{
    margin-right: 1rem;
    color: var(--white);
     label{
      color: var(--white);
     }
  }
  div:first-of-type {
  max-width: 7rem!important;
  min-width: 5rem;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer ;
  }
`;
const Header = (props) => {
  const [click, setClick] = useState(false);
  const content = props.content;
  const ref = useRef(null);
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
    <Headers ref={ref}>
      <Logo>
        <Link to="/">Connect-Cunsulting</Link>
      </Logo>
      <Nav>
      <Box /*sx={{ minWidth: 120 }}*/>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.language}
                label="Language"
                onChange={props.handleChange}
                sx={{
                  '& .MuiSelect-icon' : {
                    color: 'white',
                  },
                  '& .MuiOutlinedInput-notchedOutline' : {
                    borderColor: 'white',
                  }
                }}
              >
                <MenuItem value="uz">uz</MenuItem>
                <MenuItem value="deutsch">deutsch</MenuItem>
                <MenuItem value="english">english</MenuItem>
              </Select>
          </FormControl>
        </Box>
        <Link to="/" >
          {content.main}
        </Link>
        <Link to="/corona" >
          Corona
        </Link>
        <Link to="/blog" >
          Blog
        </Link>
        <Link to="/events" >
          {content.events}
        </Link>
        <Link to="/connect" >
          <Button>{content.connect}</Button>
        </Link>
      </Nav>
      <HamburgerBtn clicked={click} onClick={() => setClick(!click)}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={click} onClick={() => setClick(!click)}>
          <Link to="/" >
            Asosiy
          </Link>
          <Link to="/corona" >
            Corona
          </Link>
          <Link to="/blog" >
            Blog
          </Link>
          <Link to="/events" >
            Tadbirlar
          </Link>
          <Link to="/connect" >
            <Button>Bog'lanish</Button>
          </Link>
          <Box /*sx={{ minWidth: 120 }}*/>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" >Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.language}
                label="Language"
                onChange={props.handleChange}
                sx={{
                  '& .MuiSelect-icon' : {
                    color: 'white',
                  },
                  '& .MuiOutlinedInput-notchedOutline' : {
                    borderColor: 'white',
                  }
                }}
              >
                <MenuItem value="uz" color="white">uz</MenuItem>
                <MenuItem value="deutsch">deutsch</MenuItem>
                <MenuItem value="english">english</MenuItem>
              </Select>
          </FormControl>
        </Box>
      </MobileMenu>
    </Headers>
  );
};


export default Header;