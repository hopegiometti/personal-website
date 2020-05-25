import React from 'react'
import { Element } from 'react-scroll'
//styling
import styled from 'styled-components'

const StyledContactInfo = styled.div`
    text-align: center;
    background-color: white;
`

export default class SkillsCont extends React.Component {
    render() {
        return( <div>
           <Element id="contact-cont" name='skills-cont'>
               <StyledContactInfo>
                   <h1>Contact Me!</h1>
                    <h3>Email: hopegiometti@gmail.com</h3>
                    <h3>Phone: 303-250-9748</h3>
               </StyledContactInfo>      
           </Element>
        </div> )
    }
}