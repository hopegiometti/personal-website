import React from 'react'
import { Link } from 'react-scroll'
import LinkedInLogo from './LI-In-Bug2.png'
import GithubLogo from './GitHub-Mark-64px.png'
import MediumLogo from './mediumLogo.png'
//styling
import styled from 'styled-components'

const NavBarDiv = styled.div`
    top: 0rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: white;
    padding-top: 0.5rem;
`

const StyledLink = styled.div`
    display: inline;
    padding-right: 1rem;
`

const NeedToSee = styled.body`
    background: white;
`

const StyledLinkRight = styled.div`
    float: right;
    display: inline;
    padding-right: 1.2rem;
`
const StyledLogo = styled.img`
    float: right;
    height: 1.6rem;
    padding-right: 1rem;
`


export default class NavBar extends React.Component {
    render() {
        return( <div>
            {/* <NeedToSee> */}
            <NavBarDiv>
                <StyledLink>
                    <Link 
                        to="about-me" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class' 
                        activeClass='some-active-class'>
                        About Me
                    </Link>
                </StyledLink>
                <StyledLink>
                    <Link 
                        to="project-cont" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class' 
                        activeClass='some-active-class'>
                        My Projects
                    </Link>
                </StyledLink>
                <StyledLink>
                    <Link 
                        to="skills-cont" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class' 
                        activeClass='some-active-class'>
                        My skills
                    </Link>
                </StyledLink>
                <StyledLinkRight>
                    <Link 
                        to="contact-cont" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class' 
                        activeClass='some-active-class'>
                        Contact Me
                    </Link>
                </StyledLinkRight>
                <StyledLinkRight>
                    <a href="https://medium.com/@hopegiometti" target="_blank"><StyledLogo src={MediumLogo}  alt="Medium"/></a>
                </StyledLinkRight>
                <StyledLinkRight>
                    <a href="https://www.linkedin.com/in/hopegiometti/" target="_blank"><StyledLogo src={LinkedInLogo}  alt="LinkedIn"/></a>
                </StyledLinkRight>
                <StyledLinkRight>
                    <a href="https://github.com/hopegiometti" target="_blank"><StyledLogo src={GithubLogo}  alt="Github"/></a>
                </StyledLinkRight>
            </NavBarDiv>
            {/* </NeedToSee> */}
        </div> )
    }
}