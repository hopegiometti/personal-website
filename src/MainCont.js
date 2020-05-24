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
//styling
import styled from 'styled-components'

const HopeImage = styled.img`
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 4rem;
    z-index: -1;
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
            <HopeImage src={HopePhoto} alt=""/>
            <NavBar />
            <AboutMe/>
            <ProjectCont projects={projects}/>
            <SkillsCont />
        </div>)
    }
}