import React from 'react'
import { Element } from 'react-scroll'
import RubyLogo from './ruby.png'
import RailsLogo from './download.png'
import JSLogo from './JSLogo.png'
import ReactPNGLogo from './ReactPNGLogo.png'
import ReduxLogo from './ReduxLogo.png'
import PostgresLogo from './PostgresLogo2.png'
//styling
import styled from 'styled-components'

const LogoDiv = styled.div`
    background-color: white;
    display: flex;
    text-align: center;
`
const StyledLogo = styled.img`
    width: 12%;
    padding-left: 5rem;
    padding-bottom: 1rem;
`
const StyledLogoText = styled.h4`
    display: inline;
    font-family: 'Poppins';
    padding-left: 1rem;
`


export default class SkillsCont extends React.Component {
    render() {
        return( <LogoDiv>
           <Element id="skills-cont" name='skills-cont'>
               <h2>Skills</h2>
                <StyledLogo src={RubyLogo} alt="Ruby"/>
                {/* <StyledLogoText>Ruby</StyledLogoText> */}
                <StyledLogo src={RailsLogo} alt="Rails"/>
                {/* <StyledLogoText>Ruby on Rails</StyledLogoText> */}
                <StyledLogo src={JSLogo} alt="JS"/>
                {/* <StyledLogoText>JavaScript</StyledLogoText> */}
                <StyledLogo src={ReactPNGLogo} alt="React"/>
                {/* <StyledLogoText>React</StyledLogoText> */}
                <StyledLogo src={ReduxLogo} alt="Redux"/>
                <StyledLogo src={PostgresLogo} alt="Postgres"/>

           </Element>
        </LogoDiv> )
    }
}