import React from 'react'
//components
import ProjectCard from './ProjectCard'

//styling
import styled from 'styled-components'
//scroll
import { Element } from 'react-scroll'

const ContainerDiv = styled.div`
    width: 100%;
    z-index: 1;
    position: relative;
    background-color: white;
    padding-top: 0.5rem;
`
const SpaceDiv = styled.div`
    display: flex;
    justify-content: center;
`

export default class ProjectCont extends React.Component {
    
    render() {
        return(<div>
            <ContainerDiv>
            <SpaceDiv><h1>My Projects</h1></SpaceDiv>
                <Element id="project-cont" name='project-cont'>
                        {this.props.projects.map(project => <ProjectCard key={project.id} projectInfo={project}/>)}
                </Element>
            </ContainerDiv>
        </div>)
    }
}

