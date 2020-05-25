import React from 'react'
//libraries
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll' 
//components
import AboutCont from './AboutCont'
import ProjectCont from './ProjectCont'
import SkillsCont from './SkillsCont'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import HopePhoto from './IMG_0877.jpg'
import ContactMeCont from './ContactMeCont'
//styling
import styled from 'styled-components'

const HopeImage = styled.img`
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 4rem;
    z-index: -1;
`

const SpacingOpenText = styled.div`
    vertical-align: top;
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;
`

const OpeningText = styled.h1`
    vertical-align: top;
    display: inline-block;
    color: white;
    font-family: 'Poppins';
`
const SpacingAboutMeText = styled.div`
    vertical-align: top;
    display: flex;
    justify-content: center;
    padding-top: 5rem;
    padding-bottom: 15rem;
    padding-right: 15%;
    padding-left: 15%;
`

const AboutMeText = styled.h2`
    vertical-align: top;
    display: inline-block;
    color: white;
    font-family: 'Poppins';
    background-color: black;
    opacity: 0.5;
    border: 5px solid white; 
    padding: 0.5rem;   
`


export default class MainCont extends React.Component {
    render() {
        const projects = [
            {
                id: 1,
                name: 'PodPicker',
                demoLink: "https://pod-picker.netlify.com/browse",
                descr: "Platform for users to discover and save new Podcasts",
                background: 'https://i.imgur.com/FqQnPHO.png'
            },
            {
                id: 2,
                name: 'Bujo',
                demoLink: "https://bujo.netlify.app/users/hope",
                descr: "Journaling App inspired by the popular bullet journal",
                background: 'https://i.imgur.com/XESZnRN.png'
            },
            {
                id: 3,
                name: 'Flobble',
                demoLink: "https://play-dobble.netlify.app/",
                descr: "Online version of the popular card game Dobble",
                background: 'https://i.imgur.com/V8DR7Ac.png'
            }
        ]

        return(<div>
            <AboutCont />
            <HopeImage src={HopePhoto} alt="Photo of Me"/>
                <Element id="about-me" name='about-me'>
                <SpacingOpenText>
                    <OpeningText>WHO AM I?</OpeningText>
                </SpacingOpenText>
                <SpacingAboutMeText>
                    <AboutMeText>My Name is Hope Giometti. I am a programmer. In the past year, I have graduated with a degree in English from Kenyon College and from the Flatiron School. At Flatiron I learned not just how to code, but developed a passion that has now become my career. Currently, I am for hire as a fullstack engineer. </AboutMeText>
                </SpacingAboutMeText>
                </Element>
            <NavBar />
            {/* <AboutMe/> */}
            <ProjectCont projects={projects}/>
            <SkillsCont />
            <ContactMeCont />
        </div>)
    }
}