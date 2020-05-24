import React from 'react'
//styling
import styled from 'styled-components'

const ProjectDiv = styled.div`
   
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;
`

const ProjectTitle = styled.h1`
    font-family: 'Poppins';

`

const TitleDiv = styled.div`
    text-align: center;
    padding-bottom: 1rem;
`

const ProjectImage = styled.img`
    width: 30%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const ProjectImageOpaq = styled.img`
    width: 30%;
    opacity: 0.5;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const LinkText = styled.h2`
    vertical-align: top;
    display: inline-block;
    position: relative;
    top: 140px;
    right: 250px;
    color: black;
    font-family: 'Poppins';
    text-shadow: 2px 2px 4px #000000;
`

const DescDiv = styled.div`
    font-family: 'Poppins';
    text-align: center;
    padding-bottom: 3rem;
    font-size: large;
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
                    <TitleDiv>
                        <ProjectTitle>
                            {this.props.projectInfo.name}
                        </ProjectTitle>
                    </TitleDiv>
                    <DescDiv>
                        {this.props.projectInfo.descr}
                    </DescDiv>
                    {this.state.opaq ? <a href={this.props.projectInfo.demoLink}><ProjectImageOpaq src={this.props.projectInfo.background} alt="" onMouseEnter={this.showLink} onMouseLeave={this.hideLink}/><LinkText>DEMO</LinkText></a> : <ProjectImage src={this.props.projectInfo.background} alt="" onMouseEnter={this.showLink} onMouseLeave={this.hideLink}/>}
                    
                </ProjectDiv>
            </div> )
    }
}
