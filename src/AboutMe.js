import React from 'react'
import { Element } from 'react-scroll'
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
const AllBoutMe = styled.div`
    background-color: white;
    opacity: 1;
`

const FixedTextColor = styled.h4`
    opacity: 1;
    color: black;
`

export default class AboutMe extends React.Component {
    render() {
        return( <div>
           <Element id="about-me" name='about-me'>
                {/* <HopeImage src={HopePhoto} alt=""/> */}
                <AllBoutMe>
                    <FixedTextColor>
                        You might not think it, but writing code is very similar to writing poetry.
                        No, really.
                        Both are inherently detail oriented tasks. Both require logic and creativity. Both have the underlying goal of attempting to translate one’s thoughts into interpretable meaning. 
                        Ultimately, what I’m trying to say is that I fell in love with programming for the same reasons I chose to pursue a bachelor’s degree in English: my attentive nature and my love of creative problem solving.
                        My specialties include Ruby, Ruby on Rails, Javascript, React, Redux, and Git/Github. I’ve also begun recently learning Node.js. 
                        If you have any interest in programming or poetry (or better yet, both!), I'd love to talk!
                    </FixedTextColor>
                </AllBoutMe>    
           </Element>
        </div> )
    }
}