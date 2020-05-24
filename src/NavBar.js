import React from 'react'
import { Link } from 'react-scroll'
import LinkedInLogo from './LI-In-Bug2.png'
//styling
import styled from 'styled-components'

const NavBarDiv = styled.div`
    top: 0rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: white;
`

const StyledLink = styled.div`
    display: inline;
    padding-right: 1rem;
`

const NeedToSee = styled.body`
    background: white;
`

const StyledLinkRight = styled.div`
    display: inline;
    padding-left: 1rem;
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
                <a href="https://www.linkedin.com/in/hopegiometti/"><StyledLogo src={LinkedInLogo}  alt="Logo"/></a>
                </StyledLinkRight>
            </NavBarDiv>
            {/* </NeedToSee> */}
        </div> )
    }
}