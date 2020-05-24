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
`

export default class ProjectCont extends React.Component {
    
    render() {
        return(<div>
            <ContainerDiv>
            <h3>Projects</h3>
                <Element id="project-cont" name='project-cont'>
                        {this.props.projects.map(project => <ProjectCard key={project.id} projectInfo={project}/>)}
                </Element>
            </ContainerDiv>
        </div>)
    }
}

