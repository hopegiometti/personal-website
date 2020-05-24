import React from 'react'
//styling
import styled from 'styled-components'

const ProjectDiv = styled.div`
   
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: WhiteSmoke;
`

const ProjectTitle = styled.h3`
    font-size: large;
    float: right;
    padding-right: 30rem;
`

const ProjectImage = styled.img`
    width: 25%;
    padding-left: 2rem;
`
const ProjectImageOpaq = styled.img`
    width: 25%;
    padding-left: 2rem;
    opacity: 0.5;
`

let LinkText = styled.h2`
    vertical-align: top;
    display: inline-block;
    text-align: center;
    position: relative;
    top: 80px;
    right: 150px;
    color: black;
    font-family: 'Amatic SC';
`

export default class ProjectCard extends React.Component {
    state = {
        opaq: false
    }
    
    showLink = () => {
        this.setState({
            opaq: true
        }, () => console.log(this.props.projectInfo.demoLink))
    }
    
    hideLink = () => {
        this.setState({
            opaq: false
        })
    }
    
    render() {

        return( <div>
                <ProjectDiv>
                    {this.state.opaq ? <a href={this.props.projectInfo.demoLink}><ProjectImageOpaq src={this.props.projectInfo.background} alt="" onMouseEnter={this.showLink} onMouseLeave={this.hideLink}/><LinkText>Demo</LinkText></a> : <ProjectImage src={this.props.projectInfo.background} alt="" onMouseEnter={this.showLink} onMouseLeave={this.hideLink}/>}
                    <ProjectTitle>
                        {this.props.projectInfo.name}
                    </ProjectTitle>
                </ProjectDiv>
            </div> )
    }
}
